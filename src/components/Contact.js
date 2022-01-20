import React from "react";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="min-h-fit py-10 font-dosis flex flex-col items-center text-white "
      style={{
        background: "#091c29",
      }}
    >
      <h1 className="text-5xl font-bold">Contact</h1>
      <p className="w-11/12 md:max-w-xl mx-auto text-xl text-center mt-10">
        Hello, if you interested to talk with me, I am available at any time,
        please do reach me at one of my social media below, or you can click the
        button below to send me an email, thank you.
      </p>

      <a
        href="mailto:teguhs.sgr@gmail.com"
        className="flex items-center h-8 max-w-max px-2 py-5 rounded bg-indigo-500 mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
        <span className="text-white font-bold ml-2">Email me</span>
      </a>
    </div>
  );
}
