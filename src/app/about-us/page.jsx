import React from "react";
import Image from "next/image";
import main from "../../img/aboutmain.png";
import about2 from "../../img/about2.jpg";
import brid from "../../img/brid.png";
import house from "../../img/house.png";
import boy from "../../img/boy.png";
import f1 from "../../img/founder1.png";
import f2 from "../../img/founder2.png";
import { MdArrowForwardIos } from "react-icons/md";
import Header from "../Header";
export default function page() {
  return (
    <>
    <Header/>
      <div className="w-full  pt-[300px] px-[100px] flex  mt-[-180px]">
        <div className="w-[50%]">
          <Image src={main} className="w-[400px]" />
        </div>
        <div className="w-[50%]">
          <h1 className="text-[50px] mt-[70px] font-semibold">
            An Exclusive Platform for all{" "}
            <span className="text-red-600">Home-Interior Professionals</span>
          </h1>
          <button className="bg-red-500 mt-10 text-white py-3 px-7 rounded-lg">
            Partner With Us !
          </button>
        </div>
      </div>
      <div className="w-full  px-[100px] flex pt-[100px]">
        <div className="w-[50%]">
          <h1 className="text-red-500 font-bold">About Us</h1>
          <p className="text-gray-500 text-[18px]">
            Introducing Mistry.Store, India's first organized platform that
            simplifies building material purchases for home-building
            professionals like Architects, Interior Decorators, Contractors &
            Skilled workers. <br />
            <br />A comprehensive platform dealing in over 100+ brands across
            Plywood & Boards, Hardware & Tools, Electricals & Lights, Paints &
            Chemicals, Sanitary & Plumbing.
          </p>
        </div>
        <div className="w-[50%] mb-[50px]">
          <Image src={about2} className="w-[500px] mt-[-50px]" />
        </div>
      </div>
      <div className="w-full p-[50px] flex">
        <div className="w-[50%]">
          <Image src={brid} />
        </div>
        <div className="w-[50%]">
          <h1 className="text-[40px] text-red-500 py-[30px] font-bold">
            Bridging the Gap
          </h1>
          <hr />
          <p className="text-gray-500 text-[20px] mt-[20px]">
            Indian home-building industry is already a $25+ billion market and
            growing very fast. While this creates an exciting opportunity for
            home interior professionals, they also have to deal with an
            extremely fragmented sourcing ecosystem. Depending upon the size of
            the professionals business, they face issues of price opacity,
            dealing with multiple vendors, poor customer service and ad-hoc
            earnings.
          </p>
          <p className="text-red-600 text-[18px] my-[20px] font-semibold">
            We, at Mistry.Store understand these issues and bring a one-stop
            shop that simplifies building material purchases for home interior
            professionals like interior designers, architects, contractors, and
            skilled workers.
          </p>
        </div>
      </div>
      <div className="w-full text-center px-[100px] py-[50px]">
        <h1 className="font-bold text-[30px]">
          We are building an ecosystem that is not only efficient but
          sustainable for a long-term partnership.
        </h1>
        <hr />
        <h1 className="text-red-500 font-bold my-5 text-[25px]">
          Mistry.Store Set-Up
        </h1>
        <div className="flex">
          <div className="w-[25%]">
            <Image src={house} />
          </div>
          <div className="w-[25%] mt-[60px]">
            <p>
              Mistry.Store has one of the largest set-ups in NCR to serve all
              professionals. We have a 20,000 sq. ft. warehouse and sampling
              area in Gurugram catering to all your needs.
            </p>
          </div>
          <div className="w-[25%]">
            <Image src={boy} />
          </div>
          <div className="w-[25%] mt-[60px]">
            <p>
              Mistry.Store has one of the largest set-ups in NCR to serve all
              professionals. We have a 20,000 sq. ft. warehouse and sampling
              area in Gurugram catering to all your needs.
            </p>
          </div>
        </div>
        <button className="bg-red-500 text-white py-3 px-5 rounded-lg mt-7">
          Partner With Us!
        </button>
        <h1 className="text-red-500 font-bold my-10 text-[30px]">
          Meet the Founders
        </h1>

        <div className="flex justify-center space-x-20">
          <div className="w-[40%]">
            <Image src={f1} className="w-[300px] ml-[50px]" />
            <h1 className="font-bold text-[25px]">
              Vaibhav Poddar | Co-Founder
            </h1>
            <p className="text-gray-500 ">
              Vaibhav has spent over 15 years in consulting and building
              businesses for companies like McKinsey & Co., Max Healthcare, and
              Antara Assisted Care (Max India Group
            </p>
          </div>
          <div className="w-[40%]">
            <Image src={f2} className="w-[300px] ml-[50px]" />
            <h1 className="font-bold text-[25px]">
              Vaibhav Poddar | Co-Founder
            </h1>
            <p className="text-gray-500">
              Vaibhav has spent over 15 years in consulting and building
              businesses for companies like McKinsey & Co., Max Healthcare, and
              Antara Assisted Care (Max India Group
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-[50px] px-[100px] flex space-x-10">
       <div>
       <h1 className="text-gray-500 font-bold">Become a Mistry Partner</h1>
        <h1 className="text-[38px] text-gray-600 font-bold">
          Interested to Know More?
          <br />
          Sign up today and become a{" "}
          <span className="text-red-600"> Mistry Partner!</span>
        </h1>
       </div>
        <div className="bg-red-600 w-[50px] h-[50px] rounded-full cursor-pointer">
        <MdArrowForwardIos className="text-white text-[35px] ml-2 pt-3"/>
        </div>
      </div>
    </>
  );
}
