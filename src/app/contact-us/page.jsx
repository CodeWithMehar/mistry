import React from "react";
import Image from "next/image";
import main from "../../img/cont.png";
import logo from "../../img/logoo.png";
import { PiDeviceMobileSpeakerFill } from "react-icons/pi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Header from "../Header";
export default function page() {
  return (
    <>
    <Header/>
      <div className="w-full flex pt-[180px] px-[100px] space-x-5">
        <div className="text-center w-[50%]">
          <h1 className="text-[35px] font-semibold">Got Questions?</h1>
          <p className="text-red-600">
            Fill in the details and we'll get in touch with you shortly!
          </p>
          <Image src={main} className="mt-[50px]" />
        </div>
        <div className="w-[50%]">
          <h1 className="text-gray-500">I Want To *</h1>
          <div class="flex items-center me-4">
            <input
              id="red-radio"
              type="radio"
              value=""
              name="colored-radio"
              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="red-radio"
              class="ms-2 text-sm text-gray-900 dark:text-gray-300 font-bold"
            >
              Join Our Supplier Base
            </label>
            <input
              id="red-radio"
              type="radio"
              value=""
              name="colored-radio"
              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-5"
            />
            <label
              for="red-radio"
              class="ms-2 text-sm text-gray-900 dark:text-gray-300 font-bold"
            >
              Become a Partner
            </label>
          </div>
          <div className="w-full flex flex-col mt-5">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 py-3 my-3"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border-b-2 py-3 my-3"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b-2 py-3 my-3"
            />

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button className="bg-red-600 text-white rounded px-5 py-2 my-[30px]">
            Send Message
          </button>
        </div>
      </div>
      <div className="w-full flex px-[100px] justify-between">
        <div className="w-[30%] text-center mt-[100px] justify-center mb-10">
          <Image src={logo} className="ml-[100px]" />
          <h1 className="text-gray-500"> You can reach out to us at:</h1>
          <div className="flex text-red-600 space-x-2 mt-7 ml-[100px]">
            <FaMobileScreenButton />
            <h1>+91 80708 80707</h1>
          </div>
          <div className="flex text-red-600 space-x-3 ml-[30px]">
            <h1>For Sale</h1>
            <FaEnvelope />
            <h1>sales@mistry.store</h1>
          </div>
          <div className="flex text-red-600 space-x-3 ml-[30px]">
            <h1>For Sale</h1>
            <FaEnvelope />
            <h1>marketing@mistry.store</h1>
          </div>
          <h1 className="text-[25px] font-bold mt-7">
            Plot No. 24, CRPF Road Sector 61 Gurugram - 122011
          </h1>
        </div>
        <div className="w-[50%]">
        <iframe class=" w-full h-[400px] mt-[100px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
    </iframe>
        </div>
      </div>
    </>
  );
}
