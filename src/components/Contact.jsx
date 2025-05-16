import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = ({ contactRef }) => {
  const [state, handleSubmit] = useForm("xwpoyvgl");
  if (state.succeeded) {
    return (
      <div className="w-full text-center font-bold text-white text-4xl bg-slate-900 py-20">
        <p>Thanks for joining!</p>
      </div>
    );
  }

  return (
    <section ref={contactRef}>
      <div className="bg-slate-900 flex items-center justify-center md:px-35 md:py-20 p-5">
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white rounded-2xl flex flex-col items-center p-10 w-full shadow-lg/100 inset-shadow-sm inset-shadow-gray-900"
        >
          <h1 className="font-bold text-4xl pb-10 ">LET'S HAVE A CHAT!</h1>
          <input
            className="outline-none w-full text-lg bg-gray-100 rounded-lg p-4"
            name="Name"
            type="text"
            placeholder="NAME"
          />
          <input
            className="outline-none w-full text-lg bg-gray-100 rounded-lg p-4 my-5"
            name="Email"
            type="email"
            placeholder="EMAIL ID"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            className="outline-none w-full text-lg bg-gray-100 rounded-lg p-4"
            name="Chat"
            id=""
            placeholder="CHAT HERE"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-[#ffde59] p-2 px-3 rounded-full cursor-pointer border-1 border-gray-100 text-black mt-10 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
