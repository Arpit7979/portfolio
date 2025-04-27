import React, { useState } from "react";

const Contact = ({ contactRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [chat, setChat] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    console.log("message sent");
  };

  return (
    <section ref={contactRef}>
      <div className="bg-slate-900 flex items-center justify-center md:px-35 md:py-20 p-5">
        <form
          action=""
          className="bg-white rounded-2xl flex flex-col items-center p-10 w-full shadow-lg/100 inset-shadow-sm inset-shadow-gray-900"
        >
          <h1 className="font-bold text-4xl pb-10 ">LET'S HAVE A CHAT!</h1>
          <input
            className="outline-none w-full text-lg bg-gray-100 rounded-lg p-4"
            name="Name"
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="outline-none w-full text-lg bg-gray-100 rounded-lg p-4 my-5"
            name="Email"
            type="email"
            placeholder="EMAIL ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="outline-none w-full text-lg bg-gray-100 rounded-lg p-4"
            name="Chat"
            id=""
            placeholder="CHAT HERE"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={handleForm}
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
