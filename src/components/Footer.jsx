import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Images/logo.jpeg";

function Foter() {
  return (
    <div>
      <footer className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between w-full justify-center items-center text-center">
            <a className="flex justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Manasmit
              </span>
            </a>
            <ul className="flex justify-center flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:underline me-4 md:me-6 cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="feedback"
                  smooth={true}
                  duration={500}
                  className="hover:underline me-4 md:me-6 cursor-pointer"
                >
                  Feedback
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  className="hover:underline me-4 md:me-6 cursor-pointer"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021
            <a href="/" className="hover:underline">
              NerdTech™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Foter;
