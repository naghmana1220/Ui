
"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="Contact">
      {/* Header Image */}
      <div className="w-full h-auto">
        <Image src="/images/Contact5.png" alt="shop image" width={1440} height={316} className="w-full h-auto" />
      </div>

      {/* Contact Content */}
      <div className="container mx-auto p-4 pt-10">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600 mt-2">
            For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. 
            Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Contact Details and Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <Image src="/images/Contact2.png" alt="icon" width={40} height={40} className="w-8 h-8 mr-4" />
              <h3 className="text-lg font-semibold">Address</h3>
            </div>
            <p className="text-gray-600">236 5th SE Avenue,</p>
            <p className="text-gray-600">New York NY10000, United States</p>

            <div className="flex items-center mb-4 mt-6">
              <Image src="/images/Contact3.png" alt="icon" width={40} height={40} className="w-8 h-8 mr-4" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-gray-600">Mobile: +(84) 546-6789</p>
            <p className="text-gray-600">Hotline: +(84) 456-6789</p>

            <div className="flex items-center mb-4 mt-6">
              <Image src="/images/Contact2.png" alt="icon" width={40} height={40} className="w-8 h-8 mr-4" />
              <h3 className="text-lg font-semibold">Working Hours</h3>
            </div>
            <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
          </div>

          {/* Contact Form */}
          <div className="p-4">
            {submitted ? (
              <div className="text-center text-green-600 text-lg font-semibold p-4 border border-green-500 rounded">
                ✅ Thank you for shopping! Your order has been received.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-normal mb-4">Your Name</h3>
                <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded mb-4" required />

                <h3 className="text-lg font-normal mb-4">Your Email</h3>
                <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded mb-4" required />

                <h3 className="text-lg font-normal mb-4">Your Subject</h3>
                <input type="text" placeholder="Subject" className="w-full p-2 border border-gray-300 rounded mb-4" required />

                <h3 className="text-lg font-normal mb-4">Message</h3>
                <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded mb-4 h-24" required />

                <button type="submit" className="w-full py-3 bg-[#B88E2F] text-white font-semibold rounded">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
