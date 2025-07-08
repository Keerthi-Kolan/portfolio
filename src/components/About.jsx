import React from "react";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About Me</h2>
      <div className="flex flex-wrap">
        <div className="w-full ">
          <div className="flex justify-center lg:justify-start">
            <li className="text-justify">
              <ul>{ABOUT_TEXT}</ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
