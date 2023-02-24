import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";
import { FaPaperPlane } from "react-icons/fa";
import { Footer } from "./Footer";
const blobSkills = "src/assets/blobSkill.svg";
const wavesSkills = "src/assets/wave2.svg";
const blobsContact = "src/assets/blobContact1.svg";
const blobContact = "src/assets/blobContact2.svg";
const wavesContact = "src/assets/wave3.svg";

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
    <section className="relative w-full h-[70rem] bg-[#FAFAFA] pt-52 flex flex-col items-center 2xl:h-[86rem] 2xl:pt-80">
      <div
        className={`absolute w-full h-screen left-0 top-0 bg-[url('${wavesSkills}')] bg-[100%,100%] bg-no-repeat bg-left-top`}
      ></div>
      <div
        className={`absolute w-1/3 h-1/2 right-0 top-0 translate-x-[15%] translate-y-[-73%] bg-[url('${blobSkills}')] bg-[100%,100%] bg-no-repeat bg-right-bottom 2xl:translate-y-[-65%]`}
      ></div>
      <h2
        id="contact"
        className="text-7xl font-bold flex px-36 mb-10 pt-16 2xl:text-[5rem]"
      >
        Contact
        <FaPaperPlane className="text-4xl ml-4 2xl:text-[2.5rem]" />
      </h2>
      {status && sentAlert()}
      <form
        className="flex flex-col items-center w-1/2 z-10"
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
        <button
          className="text-lg text-white font-semibold w-1/3 h-10 bg-[#A8A2A2] shadow-[0_0_5px_-1px_rgba(0,0,0,0.15)] rounded-md hover:bg-[#979191] hover:translate-y-[-0.2rem] hover:shadow-[0_0_5px_-1px_rgba(0,0,0,0.30)] duration-300 2xl:h-12 2xl:text-2xl"
          type="submit"
        >
          Send
        </button>
      </form>
      <div
        className={`absolute w-5/12 h-full bottom-0 left-0 translate-x-[-15%] bg-[url('${blobsContact}')] bg-[100%,100%] bg-no-repeat bg-left-bottom`}
      ></div>
      <div
        className={`absolute w-1/4 h-full bottom-0 right-0 translate-x-[40%] translate-y-[-5%] bg-[url('${blobContact}')] bg-[100%,100%] bg-no-repeat bg-right-bottom drop-shadow-[0_0_20px_rgba(151,145,145,0.3)]`}
      ></div>
      <div
        className={`absolute w-full h-1/2 bottom-0 left-0 bg-[url('${wavesContact}')] bg-[100%,100%] bg-no-repeat bg-left-bottom`}
      ></div>
      <Footer />
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
