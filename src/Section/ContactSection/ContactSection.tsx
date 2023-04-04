import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { InputField } from "../../components/InputField/InputField";
import { TextareaField } from "../../components/TextareaField/TextareaField";
import { FaPaperPlane } from "react-icons/fa";

const service: string = import.meta.env.VITE_SERVICE_ID;
const template: string = import.meta.env.VITE_TEMPLATE_ID;
const user: string = import.meta.env.VITE_PUBLIC_KEY;

export const ContactSection = () => {
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
    <section className="contact-background pt-80 px-28">
      <h2 className="text-6xl font-bold flex">
        Contact
        <FaPaperPlane className="text-4xl ml-4" />
      </h2>
      {status && sentAlert()}
      <form
        className="mt-12 grid grid-rows-4 grid-cols-2 gap-x-4"
        onSubmit={sendEmail}
      >
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
        <div className="row-start-4 col-span-full w-full text-center mt-8">
          <button
            className="text-2xl font-bold w-[22rem] h-12 text-white bg-contactBtn rounded-md duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
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
