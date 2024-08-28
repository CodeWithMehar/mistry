"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../img/logo.svg";
import logo2 from "../img/logo2.svg";
import img1 from "../img/img1.svg";
import img2 from "../img/img2.svg";


export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-[1100px] mx-auto py-5 px-5 rounded-2xl mt-4 ml-6 bg-black  bg-opacity-25 z-50 fixed top-0 left-10">
          <div className="flex w-full justify-between">
            <div>
              <Image src={logo} className="w-[150px]" alt="Logo" />
            </div>
            <div className="flex space-x-5">
              <ul className="flex justify-between space-x-6 text-white mt-2 font-light">
                <li>
                  <a href="/" className="hover:font-extrabold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:font-extrabold">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:font-extrabold">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:font-extrabold">
                    Blog
                  </a>
                </li>
              </ul>
              <div className="flex space-x-3">
                <Image src={img1} alt="Icon 1" />
                <Image src={img2} alt="Icon 2" />
              </div>
              <div>
                <button
                  onClick={handleModalToggle}
                  className="block text-white bg-red-600 hover:bg-white hover:text-red-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
                {isModalOpen && (
                  <div
                    id="default-modal"
                    tabindex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
                  >
                    <div className="relative p-4 w-[1200px] h-[100vh]  bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <Image src={logo2} />
                        <button
                          onClick={handleModalToggle}
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>

                      <div className="flex justify-between">
                        <div className="mt-5">
                          <h1 className="text-[50px]">Hey there !</h1>
                          <p className="text-[20px]">
                            We are thrilled to welcome you on-board with Mistry
                          </p>
                        </div>
                        <div className="w-[500px] bg-gray-100 h-[80vh] shadow-md rounded mt-2 p-5">
                          <h1 className="text-[25px] font-bold">
                            Register with us
                          </h1>
                          <p className="mb-10">
                            Login/Signup using your phone number & experience a
                            simplified way of purchasing building materials
                          </p>
                          <label htmlFor=""> Phone Number</label>
                          <input
                            type="number"
                            placeholder="+91 | Phone Number"
                            className="placeholder:pl-1 placeholder:text-black p-3 w-full mt-3"
                          />
                          <button className="w-full bg-red-500 rounded py-2 text-white text-[20px] mt-[160px]">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
}
