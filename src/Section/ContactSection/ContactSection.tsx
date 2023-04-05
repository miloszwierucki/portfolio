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
    <section className="px-5 pt-56 md:px-12 lg:pt-72 xl:px-28 xl:pt-80 contact-background">
      <h2
        id="contact"
        className="text-[2.5rem] leading-9 font-bold flex lg:text-5xl xl:text-6xl"
      >
        Contact
        <FaPaperPlane className="text-3xl ml-2 lg:text-4xl lg:ml-4" />
      </h2>
      {status && sentAlert()}
      <form
        className="mt-12 grid gap-x-4 lg:grid-cols-2 lg:grid-rows-4"
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
        <div className="text-center w-full mt-8 lg:mt-12 lg:row-start-4 lg:col-span-full">
          <button
            className="text-white text-lg font-bold w-48 h-10 bg-contactBtn drop-shadow rounded-md hover:bg-contactBtnHover hover:translate-y-[-0.2rem] lg:text-2xl lg:w-[22rem] lg:h-12 duration-300"
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
    <div className="text-green-600 text-sm bg-green-100 w-full px-4 py-2 mt-4 text-center rounded-md shadow-sm shadow-grey-100 duration-300">
      Message sent successfully!
    </div>
  );
};
