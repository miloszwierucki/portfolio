import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";

const service: string = import.meta.env.VITE_SERVICE_ID;
const template: string = import.meta.env.VITE_TEMPLATE_ID;
const user: string = import.meta.env.VITE_PUBLIC_KEY;

export const ContactUs = () => {
  const [status, setStatus] = useState(false);
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
      (response) => {
        setValues({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
        setStatus(true);
        console.log("SUCCESS!", response);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  useEffect(() => {
    if (status === true) {
      setTimeout(() => {
        setStatus(false);
      }, 5000);
    }
  }, [status]);

  return (
    <section className="flex flex-col items-center w-1/2">
      <h1 className="text-5xl font-bold mb-16 mt-24">Contact me</h1>
      {status && sentAlert()}
      <form className="flex flex-col items-center w-full" onSubmit={sendEmail}>
        <InputField
          type="text"
          name="subject"
          label="Subject"
          value={values.subject}
          handleChange={handleChange}
        />
        <InputField
          type="text"
          name="name"
          label="Name"
          value={values.name}
          handleChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          label="E-mail"
          value={values.email}
          handleChange={handleChange}
        />
        <TextareaField
          name="message"
          label="Message"
          value={values.message}
          handleChange={handleChange}
        />
        <button
          className="w-32 h-8 bg-slate-200 hover:bg-slate-300 rounded-lg mb-12"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

const sentAlert = () => {
  return (
    <div className="bg-green-100 rounded-md w-4/5 px-4 py-2 mb-8 shadow-sm shadow-grey-100 duration-300">
      <span className="text-sm text-center w-full block text-green-600">
        Message sent successfully!
      </span>
    </div>
  );
};
