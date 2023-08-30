import { TextareaField } from "../../components/TextareaField/TextareaField";
import { InputField } from "../../components/InputField/InputField";
import { useTranslation } from "react-i18next";
import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { template } from "../../template/TemplateEmail";

const sender: string = import.meta.env.VITE_SENDER;
const recipient: string = import.meta.env.VITE_RECIPIENT;
const key: string = import.meta.env.VITE_KEY;

export const ContactSection = () => {
  const { t } = useTranslation();
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
    fetch("/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
      body: JSON.stringify({
        to: [
          {
            name: "Miłosz",
            email: recipient,
          },
        ],
        from: {
          name: "Website Form",
          email: sender,
        },
        subject: values.subject,
        message: template(
          values.name,
          values.subject,
          values.email,
          values.message
        ),
      }),
    }).then(
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
    <section className="px-5 pt-56 md:px-12 lg:pt-72 xl:px-28 xl:pt-80 3xl:px-32 3xl:pt-96 contact-background">
      <h2
        id="contact"
        className="text-[2.5rem] leading-9 font-bold flex lg:text-5xl xl:text-6xl 3xl:text-7xl"
      >
        {t("contact")}
        <FaPaperPlane className="text-3xl ml-2 lg:text-4xl lg:ml-4 3xl:text-5xl" />
      </h2>
      <p className="text-lg mt-2 lg:text-xl xl:text-2xl 3xl:text-3xl">
        {t("contactSection.description")}
      </p>
      {status && <SentAlert />}
      <div className="2xl:w-11/12 2xl:mx-auto">
        <form
          className="mt-12 grid gap-x-4 lg:grid-cols-2 lg:grid-rows-4"
          onSubmit={sendEmail}
        >
          <InputField
            type="text"
            name="subject"
            label="contactSection.subject"
            value={values.subject}
            handleChange={handleChange}
          />
          <InputField
            type="text"
            name="name"
            label="contactSection.name"
            value={values.name}
            handleChange={handleChange}
          />
          <InputField
            type="email"
            name="email"
            label="contactSection.email"
            value={values.email}
            handleChange={handleChange}
          />
          <TextareaField
            name="message"
            label="contactSection.message"
            value={values.message}
            handleChange={handleChange}
          />
          <div className="text-center w-full mt-8 lg:mt-12 lg:row-start-4 lg:col-span-full">
            <button
              className="text-white text-lg font-bold w-48 h-10 bg-contactBtn drop-shadow rounded-md hover:bg-contactBtnHover hover:translate-y-[-0.2rem] lg:text-2xl lg:w-[22rem] lg:h-12 3xl:text-3xl 3xl:w-96 3xl:h-14 3xl:rounded-lg duration-300"
              type="submit"
            >
              {t("contactSection.button")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const SentAlert = () => {
  const { t } = useTranslation();

  return (
    <div className="text-green-600 text-sm bg-green-100 w-full px-4 py-2 mt-4 text-center rounded-md shadow-sm shadow-grey-100 2xl:w-11/12 2xl:mx-auto 2xl:text-base 2xl:mt-6 duration-300">
      {t("contactSection.success")}
    </div>
  );
};
