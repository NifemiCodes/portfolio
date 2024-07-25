import { FormEvent, useRef, useState } from "react";
import "../styles/output.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailMessg, setEmailMessg] = useState("");

  const form = useRef<HTMLFormElement>(null);
  const key = import.meta.env.VITE_PUBLIC_KEY;
  const service = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const template = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

  const sendEmail = () => {
    emailjs.sendForm(service, template, form.current || "", { publicKey: key }).then(
      () => {
        alert("Mail sent. Thank you for contacting me ☺♥");
      },
      (error) => {
        throw new Error(error.message);
      }
    );
  };

  const validate = (e: FormEvent) => {
    e.preventDefault();
    const regex = /^[a-z0-9]+@[a-z]+\.com$/;
    let nError = true;
    let eError = true;
    let mError = true;

    // validate name
    if (!name) {
      setNameError(true);
      nError = true;
    } else {
      setNameError(false);
      nError = false;
    }

    // validate email
    if (email) {
      if (!regex.test(email)) {
        eError = true;
        setEmailError(true);
        setEmailMessg("Please check your email");
      } else {
        eError = false;
        setEmailError(false);
        setEmailMessg("");
      }
    } else {
      eError = true;
      setEmailError(true);
      setEmailMessg("Email cannot be empty");
    }

    // validate message
    if (!message) {
      mError = true;
      setMessageError(true);
    } else {
      mError = false;
      setMessageError(false);
    }

    if (!(nError && eError && mError)) {
      sendEmail();
    }
  };

  return (
    <div id="contact" className="bg-secBgL dark:bg-secBgD flex flex-col items-center gap-10 px-5 py-14 scroll-mt-20 lg:px-16">
      <h2 className="font-mont font-bold text-3xl">Send Me A Message</h2>

      <form onSubmit={validate} ref={form} className="w-full flex flex-col gap-5 lg:w-[30%]">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name..."
            className={`${
              nameError ? "border-red" : "border-black dark:border-links"
            } border-[1px] border-solid rounded-lg p-2 font-courier bg-white bg-opacity-0 dark:placeholder:text-lightGrey`}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          {nameError ? <small className="text-red">Name cannot be empty</small> : null}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            className={`${
              emailError ? "border-red" : "border-black dark:border-links"
            } border-[1px] border-solid rounded-lg p-2 font-courier bg-white bg-opacity-0 dark:placeholder:text-lightGrey`}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          {emailError ? <small className="text-red">{emailMessg}</small> : null}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone">
            WhatsApp No. <span>{"(optional)"}</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g (+234)1234567890"
            className="border-black dark:border-links border-[1px] border-solid rounded-lg p-2 font-courier bg-white bg-opacity-0 dark:placeholder:text-lightGrey"
          />
        </div>

        <div className="flex flex-col gap-1">
          <textarea
            name="message"
            id="content"
            rows={10}
            placeholder="message text..."
            className={`${
              messageError ? "border-red" : "border-black dark:border-links"
            } border-[1px] border-solid rounded-lg p-2 font-courier bg-white bg-opacity-0 dark:placeholder:text-lightGrey`}
            onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
          {messageError ? <small className="text-red">Name cannot be empty</small> : null}
        </div>

        <button className="bg-links rounded-lg text-white font-mont self-end py-2 px-3 hover:brightness-75 active:opacity-50">Send</button>
      </form>
    </div>
  );
};
export default Contact;
