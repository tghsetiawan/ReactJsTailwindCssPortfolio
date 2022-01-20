import React from "react";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="min-h-fit my-16 font-dosis flex flex-col items-center"
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
          className="h-6 w-6 text-white "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="text-white font-bold ml-2">Email me</span>
      </a>

      
    </div>
  );
}
