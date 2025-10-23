'use client';

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-100 dark:bg-slate-900 text-center transition-colors duration-500">
    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h1>
    <h2 className="text-2xl  mb-6 text-gray-900 ">Wanna connect? Let's connect on Linkedin, or directly email me on hrutubhatt04@gmail.com.<br/> I am open for collaborations and contributions. </h2>
    {/* <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left"> 
        <input
        type="email"
        required
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
        />
        <textarea
        required
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="w-full p-3 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
        />
        <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
        Send
        </button>
        {status && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{status}</p>
        )}
    </form> */}
    </section>

  );
}
