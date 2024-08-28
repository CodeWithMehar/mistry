"use client";
import blogImage from "../../img/blog.jpg";
import logo from "../../img/logo2.svg";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import bpage from "../../img/bpage2.jpeg";
import bpage2 from "../../img/blog1.webp";

export default function Page() {
  return (
    <>
      <div className="w-full flex justify-around py-[20px]">
        <div>
          <Image src={logo} className="w-[250px]" />
        </div>
        <div className="flex space-x-0">
          <IoSearchSharp className="mt-5 text-[25px] mr-3" />
          <input
            type="text"
            placeholder="Search Blogs"
            className="border-b-2 placeholder:text-black placeholder:text-[15px] w-full"
          />
        </div>
      </div>
      <div
        className="w-full bg-cover py-[100px] h-[400px] mb-[5%]"
        style={{ backgroundImage: `url(${blogImage.src})` }}
      >
        <div className="ml-[55%]">
          <h1 className="text-[30px] font-thin">
            Mistry.store is one stop solution for all <br />
            building material needs. <br /> We guarantee Best Prices across{" "}
            <br /> Building Materials in NCR.
          </h1>
        </div>
      </div>
      <div className="w-full text-center">
        <h1 className="text-[40px] font-thin">Blogs</h1>
        <h1 className="text-[25px] font-thin">
          All Posts <br />
          Select My Designer By Mistry.Store
        </h1>
       
        <div className="grid grid-cols-2 py-[30px] px-[170px] gap-5">
          <div
            className="w-full h-[350px] bg-cover"
            style={{ backgroundImage: `url(${bpage.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover"
            style={{ backgroundImage: `url(${bpage2.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-[30px] px-[170px] gap-5">
          <div
            className="w-full h-[350px] bg-cover"
            style={{ backgroundImage: `url(${bpage.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover"
            style={{ backgroundImage: `url(${bpage2.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-[30px] px-[170px] gap-5">
          <div
            className="w-full h-[350px] bg-cover"
            style={{ backgroundImage: `url(${bpage.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover"
            style={{ backgroundImage: `url(${bpage2.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-[30px] px-[170px] gap-5">
          <div
            className="w-full h-[350px] bg-cover"
            style={{ backgroundImage: `url(${bpage.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover"
            style={{ backgroundImage: `url(${bpage2.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-[30px] px-[170px] gap-5">
          <div
            className="w-full h-[350px] bg-cover"
            style={{ backgroundImage: `url(${bpage.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
          <div
            className="w-full bg-cover"
            style={{ backgroundImage: `url(${bpage2.src})` }}
          >
            <div className="w-full h-full bg-black opacity-60 p-5">
              <h1 className="text-white text-left">Mistry.store</h1>
              <h1 className="text-white text-left">24 june 2024 . 2 min</h1>
              <p className="text-white text-left text-[25px] mt-32">
                How ‘Select my Designer’ simplifies your search for an ideal
                interior designer?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
