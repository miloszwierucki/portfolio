"use client";

import { ReactNode, useActionState, useCallback, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

import { sendEmailAction } from "@/app/[locale]/contact/actions/send-email";
import { MarkdownComponents } from "@/components/markdown-components";
import { SubmitButton } from "@/components/ui/submit-button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { ContactQuery } from "@tina/__generated__/types";

export function ContactForm({
  className,
  email,
  name,
  message,
  privacy,
  button,
}: {
  className?: string;
  email: ContactQuery["contact"]["email"];
  name: ContactQuery["contact"]["name"];
  message: ContactQuery["contact"]["message"];
  privacy: ContactQuery["contact"]["privacy"];
  button: ContactQuery["contact"]["button"];
}) {
  const [stateEmail, actionEmail] = useActionState(sendEmailAction, undefined);
  const [verifiedState, setVerifiedState] = useState<unknown>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const handleTurnstileSuccess = useCallback(
    () => setVerifiedState(stateEmail),
    [stateEmail]
  );
  const clearTurnstileVerification = useCallback(
    () => setVerifiedState(null),
    []
  );

  if (!email || !name || !message || !button || !privacy) return null;

  return (
    <div className={cn("mx-auto w-full", className)}>
      <form
        className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-5"
        action={actionEmail}
      >
        <LabelInputContainer>
          <Label htmlFor="email" data-tina-field={tinaField(email, "label")}>
            {email.label ?? ""}
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
            {name.label ?? ""}
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

        <LabelInputContainer className="lg:col-span-2">
          <Label
            htmlFor="message"
            data-tina-field={tinaField(message, "label")}
          >
            {message.label ?? ""}
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

        {privacy.label && (
          <div
            data-tina-field={tinaField(privacy, "label")}
            className="markdown text-sm 2xl:text-base"
          >
            <TinaMarkdown
              content={privacy.label ?? ""}
              components={MarkdownComponents()}
            />
          </div>
        )}

        <SubmitButton
          label={button.label ?? ""}
          pendingLabel={button.pendingLabel ?? ""}
          disabled={verifiedState === null || verifiedState !== stateEmail}
          data-tina-field={tinaField(button, "label")}
          className="lg:col-end-3"
        />
        {stateEmail?.message && (
          <p
            role="alert"
            className="w-full text-center text-base opacity-50 lg:col-span-2 xl:mb-2"
          >
            {stateEmail.message}
          </p>
        )}

        <div className="w-full">
          {turnstileSiteKey ? (
            <Turnstile
              siteKey={turnstileSiteKey}
              onSuccess={handleTurnstileSuccess}
              onExpire={clearTurnstileVerification}
              onError={clearTurnstileVerification}
              rerenderOnCallbackChange
              options={{
                action: "contact",
                appearance: "interaction-only",
                theme: "auto",
              }}
            />
          ) : (
            <p role="alert" className="text-sm opacity-70">
              Verification is temporarily unavailable.
            </p>
          )}
          {stateEmail?.errors?.turnstile && (
            <p role="alert" className="mt-2 text-sm opacity-70">
              {stateEmail.errors.turnstile[0]}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
