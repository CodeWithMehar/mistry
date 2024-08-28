import React from "react";
import phon from "../img/ph.svg";
import card from "../img/ca.svg";
import note from "../img/no.svg";
import box from "../img/box.svg";
import bag from "../img/bag.svg";
import car from "../img/car.svg";
import Image from "next/image";
import phone from '../img/phoneimg.png'
import g from '../img/gogl.png';
import a from '../img/app.png';
export default function Work() {
  return (
    <>
      <div className="bg-[#FEF5F5] w-full py-[40px] text-center">
        <h1 className="text-gray-400 text-[25px] font-light">Here’s how</h1>
        <h1 className="text-[35px] text-black font-bold ">
          Mistry.Store works
        </h1>
        <h1 className="text-gray-400 text-[22px]">
          All your home building materials, just a few steps away!
        </h1>
        <div className="flex mt-5">
          <div className="w-[49%] pt-[40px]">
            <Image src={phon} className="w-[50px] ml-[88%]" />
            <h1 className="bg-red-600 text-white rounded w-[25px] mt-20 ml-[90%]">
              2
            </h1>
            <h1 className="text-black pl-[62%] pt-3 font-bold">
              Document Submission
            </h1>
            <p className="text-right pr-7 text-gray-400">
              Submit the required documents with your RM & get enrolled in the
              smart credit program
            </p>
            <Image src={card} className="w-[50px] ml-[88%] mt-[60px]" />
            <h1 className="bg-red-600 text-white rounded w-[25px] mt-20 ml-[90%]">
              4
            </h1>
            <h1 className="text-black pl-[55%] font-bold pt-3">
              Search & Send Your Requirements
            </h1>
            <p className="text-right pr-7 text-gray-400">
              Submit the required documents with your RM & get enrolled in the
              smart credit program
            </p>
            <Image src={bag} className="w-[50px] ml-[88%] mt-[60px]" />
            <h1 className="bg-red-600 text-white rounded w-[25px] mt-20 ml-[90%]">
              6
            </h1>
            <h1 className="text-black pl-[62%] pt-3 font-bold">
              Get Delivery Support
            </h1>
            <p className="text-right pr-7 text-gray-400">
              Submit the required documents with your RM & get enrolled in the
              smart credit program
            </p>
          </div>
          <div className="w-[5px] bg-red-600"></div>
          <div className="w-[49%]">
            <h1 className="bg-red-600 text-white rounded w-[25px] ml-7 mt-10">
              1
            </h1>
            <h1 className="text-black pt-3 font-bold text-left pl-7">
              Get in touch
            </h1>
            <p className="text-left pl-7 text-gray-400">
              First, get in touch with Mistry.Store to be assigned a dedicated
              Relationship Manager (RM)
            </p>
            <Image src={note} className="w-[50px] ml-7 mt-[40px]" />
            <h1 className="bg-red-600 text-white rounded w-[25px] ml-7 mt-20">
              3
            </h1>
            <h1 className="text-black pt-3 font-bold text-left pl-7">
              Credit Limit Setup and Approval
            </h1>
            <p className="text-left pl-7 text-gray-400">
              Your RM will assist in setting up a credit line with our partner
              institutions. Once approved, you are ready to order
            </p>
            <Image src={car} className="w-[50px] ml-7 mt-[40px]" />
            <h1 className="bg-red-600 text-white rounded w-[25px] ml-7 mt-20">
              5
            </h1>
            <h1 className="text-black pt-3 font-bold text-left pl-7">
              Credit Limit Setup and Approval
            </h1>
            <p className="text-left pl-7 text-gray-400">
              Your RM will assist in setting up a credit line with our partner
              institutions. Once approved, you are ready to order
            </p>
            <Image src={box} className="w-[50px] ml-7 mt-[40px]" />
          </div>
        </div>
        <div className="">
          <button className="bg-red-600 text-white rounded mt-7 mb-3 px-6 py-2">
            Sign Up Now
          </button><br/>
          <a href="" className="underline text-red-600">
            {" "}
            Know More
          </a>
        </div>
      </div>
      {/* download app */}
      <div className="w-full py-[100px] px-[100px] flex justify-between">
          <div className="w-[65%]">
            <h1 className="text-red-600 text-[40px] font-bold mt-14">Mistry.Store Download the App Now!</h1>
            <h1 className="text-[40px] text-black">to get exclusive offers</h1>
        <div className="flex">
        <Image src={g} className="w-[200px] mx-[10px] mt-5"/>
        <Image src={a} className="w-[200px] mx-[10px] mt-5"/>
        </div>
          </div>
          <div className="w-[35%]">
            <Image src={phone} className="w-[200px]"/>
          </div>
      </div>
    </>
  );
}
