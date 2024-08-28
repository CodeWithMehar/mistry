import React from "react";
import Image from "next/image";
import logo from "../img/fot1.svg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import f from "../img/facebook.svg";
import i from "../img/instagram.svg";
import l from "../img/linkedin.svg";
import y from "../img/youtube.svg";
import w from "../img/whatsapp.svg";
export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#333333] py-[70px] px-[30px] flex space-x-5">
        <div className="w-[25%]">
          <Image src={logo} className="w-full" />
        </div>
        <div className="w-[25%]">
          <ul className="flex flex-col space-y-5 mt-5 text-white">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Partner with Us</li>
            <li>FAQ's</li>
            <li>Expert Inspection Services</li>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul className="flex flex-col space-y-5 mt-5 text-white">
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Delivery Ploicy</li>
            <li>FAQ's</li>
            <li>Expert Inspection Services</li>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul className="flex flex-col space-y-5 mt-5 text-white">
            <li className="text-[25px]">Contact Us</li>
            <li className="flex">
              <MdOutlinePhoneInTalk className="text-[25px] mr-3" /> +91 80708
              80707
            </li>
            <li className="flex">
              {" "}
              <MdForwardToInbox className="text-[25px] mr-3" /> Marketing :
              markting5151@gmail.com
            </li>
            <li className="flex">
              {" "}
              <MdForwardToInbox className="text-[25px] mr-3" /> Sales :
              sales5151@gmail.com
            </li>
            <li className="flex">
              <FaMapMarkerAlt className="text-[45px] mr-3" />
              <p>
                003, Ground Floor, Bestech Business Center Tower, Sector 48,
                Basdhahpur Sohna Road, Gurugram, Haryana, 122018
              </p>
            </li>
          </ul>
        </div>
    
      </div>
      <div className="w-full bg-[#333333] pb-10 px-[70px] flex justify-between">
          <h1 className="text-white">
            Copyright © 2023 Infraequity Technologies Private Limited
          </h1>
          <div className="flex space-x-5">
            <Image src={f} />
            <Image src={i} />
            <Image src={y} />
            <Image src={w} />
            <Image src={l} />
          </div>
        </div>
    </>
  );
}
