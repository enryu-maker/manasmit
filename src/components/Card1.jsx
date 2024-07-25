import React from "react";
import { RiCustomerServiceLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link as ScrollLink } from "react-scroll";

function Card1() {
  return (
    <div className="h-full w-full z-20 p-4 bg-gray-50">
      <div className="flex flex-col h-full w-full justify-center bg-gray-50">
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="w-full sm:w-[40vh] h-[30vh] shadow-lg bg-white rounded-lg p-4 sm:p-12">
            <div className="flex flex-col gap-5 h-full w-full justify-center">
              <div className="flex md:justify-between justify-start items-center gap-5">
                <span>
                  <RiCustomerServiceLine className="text-5xl" />
                </span>
                <div className="flex flex-col text-start">
                  <p className="text-md font-medium">Call us</p>
                  <p className="text-lg font-semibold">
                    <a
                      href="tel:+919890257694"
                      // className="text-md font-normal text-white"
                    >
                      +91 9890257694
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <p>Get The Quality Care That You Deserve Immediately</p>
              </div>
              <div>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <button className="p-2 px-6 border-2 rounded-lg">
                    Contact Us
                  </button>
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[70vh] md:h-[30vh] h-fit shadow-lg bg-white rounded-lg p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-center w-full h-full">
              <div className="flex flex-col w-full h-full">
                <div>
                  <p className="px-2">
                    At Manasmit, we are dedicated to connecting our valued
                    customers with certified professionals across various
                    fields.
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full h-full mt-4 sm:mt-0">
                <div className="flex flex-row justify-between">
                  <SlCalender className="text-5xl" />
                  <div className="justify-center m-auto pl-4">
                    <p className="text-2xl font-semibold">Opening Hours</p>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex flex-row justify-between h-full py-2 text-sm">
                    <div>
                      <p>Monday to Saturday</p>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <p>9am to 3pm</p>
                      </div>
                      <div>
                        <p>5pm to 10pm</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-row justify-between h-full py-2 text-sm">
                    <div>
                      <p>Sunday</p>
                    </div>
                    <div>
                      <p className="font-semibold">Closed</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
