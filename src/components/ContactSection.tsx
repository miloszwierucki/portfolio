import { useState } from "react";
import emailjs from "@emailjs/browser";
import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";

const service: string = import.meta.env.VITE_SERVICE_ID;
const template: string = import.meta.env.VITE_TEMPLATE_ID;
const user: string = import.meta.env.VITE_PUBLIC_KEY;

export const ContactUs = () => {
  const [values, setValues] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.send(service, template, values, user).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="flex flex-col items-center w-1/2">
      <h1 className="text-5xl font-bold mb-16 mt-24">Contact me</h1>
      <form className="flex flex-col items-center w-full" onSubmit={sendEmail}>
        <InputField
          type="text"
          name="subject"
          label="Subject"
          handleChange={handleChange}
        />
        <InputField
          type="text"
          name="name"
          label="Name"
          handleChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          label="E-mail"
          handleChange={handleChange}
        />
        <TextareaField
          name="message"
          label="Message"
          handleChange={handleChange}
        />
        <button
          className="w-32 h-8 bg-slate-200 hover:bg-slate-300 duration-300 rounded-lg mb-12"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};
