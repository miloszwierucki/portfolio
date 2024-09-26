"use client";

import { tinaField } from "tinacms/dist/react";
import { useFormState } from "react-dom";
import React from "react";

import { sendEmailAction } from "@/app/[lang]/contact/actions/send-email";
import { SubmitButton } from "@/components/ui/submit-button";
import { ContactQuery } from "@/tina/__generated__/types";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ContactForm({
  className,
  email = { __typename: "ContactEmail", label: "", placeholder: "" },
  name = { __typename: "ContactName", label: "", placeholder: "" },
  message = { __typename: "ContactMessage", label: "", placeholder: "" },
  button = { __typename: "ContactButton", label: "", pendingLabel: "" },
}: {
  className?: string;
  email: ContactQuery["contact"]["email"];
  name: ContactQuery["contact"]["name"];
  message: ContactQuery["contact"]["message"];
  button: ContactQuery["contact"]["button"];
}) {
  const [stateEmail, actionEmail] = useFormState(sendEmailAction, undefined);

  if (!email || !name || !message || !button) return null;

  return (
    <div className={cn("mx-auto w-full", className)}>
      <form className="grid w-full grid-cols-2 gap-6" action={actionEmail}>
        <LabelInputContainer>
          <Label htmlFor="email" data-tina-field={tinaField(email, "label")}>
            {email.label}
          </Label>
          <Input
            id="email"
            placeholder={email.placeholder ?? ""}
            data-tina-field={tinaField(email, "placeholder")}
            type="email"
            name="email"
            error={
              stateEmail?.errors?.email ? stateEmail.errors.email[0] : undefined
            }
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="name" data-tina-field={tinaField(name, "label")}>
            {name.label}
          </Label>
          <Input
            id="name"
            placeholder={name.placeholder ?? ""}
            data-tina-field={tinaField(name, "placeholder")}
            type="name"
            name="name"
            error={
              stateEmail?.errors?.name ? stateEmail.errors.name[0] : undefined
            }
          />
        </LabelInputContainer>

        <LabelInputContainer className="col-span-2">
          <Label
            htmlFor="message"
            data-tina-field={tinaField(message, "label")}
          >
            {message.label}
          </Label>
          <Textarea
            id="message"
            placeholder={message.placeholder ?? ""}
            data-tina-field={tinaField(message, "placeholder")}
            name="message"
            error={
              stateEmail?.errors?.message
                ? stateEmail.errors.message[0]
                : undefined
            }
          />
        </LabelInputContainer>

        <SubmitButton
          label={button.label}
          pendingLabel={button.pendingLabel}
          data-tina-field={tinaField(button, "label")}
          className="col-end-3"
        />
        {stateEmail?.message && (
          <p
            role="alert"
            className="col-span-2 w-full text-center text-base opacity-50"
          >
            {stateEmail.message}
          </p>
        )}
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
