import React, { useState } from "react";
import pic from "../Images/contact.png";
import bg from "../Images/bg.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to an API
    console.log("Form submitted:", formData);

    // Clear form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className="w-full h-full bg-cover bg-opacity-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-row w-full h-full">
        <div className="w-full gap-5 p-10 h-full flex flex-col justify-center">
          <div className="py-4 space-y-5">
            <p className="text-md font-medium">GET APPOINTMENT</p>
            <p className="text-4xl font-semibold w-3/4">
              Get the Right Person to Take Care of You!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-5">
              <input
                className="bg-gray-50 h-10 w-1/2 p-4 border-bluesomething rounded-md focus:border-[1px] focus:border-bluesomething"
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="bg-gray-50 h-10 w-1/2 p-4 border-bluesomething rounded-md focus:border-[1px] focus:border-bluesomething"
                placeholder="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5">
              <input
                className="bg-gray-50 h-10 w-1/2 p-4 border-bluesomething rounded-md focus:border-[1px] focus:border-bluesomething"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="bg-gray-50 h-10 w-1/2 p-4 border-bluesomething rounded-md focus:border-[1px] focus:border-bluesomething"
                placeholder="Subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="w-full h-fit">
              <textarea
                className="bg-gray-50 h-32 w-full p-4 border-bluesomething rounded-md focus:border-[1px] focus:border-bluesomething"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-gray-50 focus:border-[1px] focus:border-bluesomething hover:bg-bluesomething transition-all ease-in-out hover:text-white p-3 px-6 rounded-md border-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div
          className="w-full h-full bg-cover md:block hidden"
          style={{
            backgroundImage: `url(${pic})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Contact;
