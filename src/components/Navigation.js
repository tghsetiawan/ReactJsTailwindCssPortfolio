import React from "react";
import content from "../content";
import { Link as ScrollLink } from "react-scroll";

export default function Navigation() {
  return (
    <div
      style={{
        background: "#091c29",
      }}
      className="sticky top-0 z-50"
    >
      <div className="flex items-center justify-between w-10/12 mx-auto px-3 text-white font-dosis ">
        <ScrollLink to="Header" smooth={true}>
          <h1 className="text-3xl font-bold">
            {content.nav.logo}{" "}
            <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
          </h1>
        </ScrollLink>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.text} smooth={true}>
                <span key={index} className="text-xl mr-4">
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
