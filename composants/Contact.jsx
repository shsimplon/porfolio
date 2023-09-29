/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;

    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_USER_ID;

    console.log(TEMPLATE_ID);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        toast.success("Votre email est envoyé avec succès !");
        form.current.reset();
      },
      (error) => {
        alert("Erreur lors de l'envoi de l'e-mail: " + error.text);
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contatc">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
