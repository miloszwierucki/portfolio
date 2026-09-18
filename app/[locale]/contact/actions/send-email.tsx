"use server";

import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { z } from "zod";

import type { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";

import EmailTemplate from "@/components/layout/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_ACTION = "contact";

const FormSchema = z.object({
  email: z
    .email({ message: "Something went wrong, the email is invalid." })
    .trim(),
  name: z
    .string()
    .max(30, { message: "Name is too long, maximum 30 characters." })
    .trim(),
  message: z
    .string()
    .min(1, { message: "Forgot about the content? It's required :P" })
    .max(350, {
      message: "The message body is too long, maximum 350 characters.",
    })
    .trim(),
  turnstile: z.string().min(1).max(2048),
});

const TurnstileResponseSchema = z.object({
  success: z.boolean(),
  action: z.string().optional(),
});

type FormState =
  | {
      errors?: {
        email?: string[];
        name?: string[];
        message?: string[];
        turnstile?: string[];
      };
      message?: string;
    }
  | undefined;

export async function sendEmailAction(state: FormState, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
    turnstile: formData.get("cf-turnstile-response"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, name, message, turnstile } = validatedFields.data;
  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!turnstileSecretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured");

    return {
      errors: {
        turnstile: ["Verification is temporarily unavailable."],
      },
    };
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: turnstileSecretKey,
        response: turnstile,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const verification = TurnstileResponseSchema.safeParse(
      (await response.json()) as TurnstileServerValidationResponse
    );

    if (
      !response.ok ||
      !verification.success ||
      !verification.data.success ||
      verification.data.action !== TURNSTILE_ACTION
    ) {
      return {
        errors: {
          turnstile: ["Verification failed. Please try again."],
        },
      };
    }
  } catch (error) {
    console.error("Turnstile verification failed", error);

    return {
      errors: {
        turnstile: ["Verification is temporarily unavailable."],
      },
    };
  }

  const { data } = await resend.emails.send({
    from: process.env.SENDER_EMAIL as string,
    to: process.env.CONTACT_EMAIL as string,
    replyTo: email,
    subject: `New message from ${name}`,
    react: <EmailTemplate name={name} email={email} message={message} />,
  });

  if (data) {
    console.log("Email sent");
    revalidatePath("/contact");

    return {
      message: "The message has been sent.",
    };
  } else {
    console.log("Email not sent");

    return {
      message: "An error occurred while sending the message.",
    };
  }
}
