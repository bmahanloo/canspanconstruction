"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full flex justify-center border-2 border-primary p-12">
      {submitted ? (
        <h1 className="text-4xl font-bold text-white">
          Thank you for your message, we will get back to you soon!
        </h1>
      ) : (
        <form
          className="w-full max-w-lg"
          name="contact-form"
          method="POST"
          action="/"
          data-netlify="true" // This enables Netlify form handling
          onSubmit={() => setSubmitted(true)} // Handle the submitted state here
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="p-2 rounded-sm border-2 border-transparent outline-none focus:border-primary transition-all"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 rounded-sm border-2 border-transparent outline-none focus:border-primary transition-all"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="p-2 rounded-sm border-2 border-transparent outline-none focus:border-primary transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-2 text-white bg-primary hover:bg-secondary transition-all py-2 px-4 rounded-sm"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
