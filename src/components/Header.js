import React, { useState, useEffect } from "react";
import content from "../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";

//comment laptop lenovo
export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div id="Header"
      className="min-h-screen flex items-center justify-center overflow-y-hidden"
      style={{
        background: "#091c29",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between font-dosis">
        <div className="w-full md:w-2/5">
          <LazyLoadImage
            src={content.header.img}
            effect="blur"
            placeholderSrc="assets/logo512.png"
          />
        </div>
        <div className="text-white text-center md:text-left">
          <h2
            className={`${
              animated ? "" : "traslate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            {content.header.text[0]} <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "traslate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-out font-bold text-2xl text-gray-500`}
          >
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className="bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg animate-float">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
