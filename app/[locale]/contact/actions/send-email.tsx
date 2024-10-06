"use server";

import { Resend } from "resend";

import EmailTemplate from "@/components/layout/email-template";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
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
});

type FormState =
  | {
      errors?: {
        email?: string[];
        name?: string[];
        message?: string[];
      };
      message?: string;
    }
  | undefined;

export async function sendEmailAction(state: FormState, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, name, message } = validatedFields.data;

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
