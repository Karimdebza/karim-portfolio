import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => alert("Message envoyé !"))
    .catch(() => alert("Erreur"));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <input name="user_name" placeholder="Nom" className="p-3 bg-gray-800" />
      <input name="user_email" placeholder="Email" className="p-3 bg-gray-800" />
      <textarea name="message" placeholder="Message" className="p-3 bg-gray-800" />
      <button className="bg-white text-black py-3 rounded">Envoyer</button>
    </form>
  );
}