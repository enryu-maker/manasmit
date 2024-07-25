import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Images/logo.png";

const navigation = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Feedback", href: "feedback" },
  { name: "Contact us", href: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure
      as="nav"
      className="bg-white text-black fixed right-0 left-0 top-0 z-50"
    >
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 sticky top-0 bg-gray-50 w-full z-50">
        <div className="relative flex h-16 w-full items-center justify-end">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group sticky top-0 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                className="h-10 scale-125 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block w-full">
              <div className="flex space-x-4 text-black text-center justify-end">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="text-black rounded-md px-3 py-2 text-md font-medium"
                    activeClass="text-blue-500"
                    spy={true}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              className="text-black hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium"
              activeClass="text-blue-500"
              spy={true}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
