"use client";
import React from "react";
import Slider from "react-slick";
import safe from "../img/safe.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import b1 from "../img/Inox.png";
import b2 from "../img/jaquar.png";
import b3 from "../img/kara.png";
import b4 from "../img/kohler.png";
import wood from "../img/Wood.png";
import paint from "../img/paint.png";
import brand from '../img/brands.png'
export default function Category() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="w-full bg-[#FEF5F5] py-[50px] px-[100px]">
        <h1 className="text-[40px]">
          <span className="text-red-500 font-bold">
            Wide range of Categories
          </span>
          <br />
          to choose products from
        </h1>
        <div>
          <Slider {...settings} className="mt-[50px] rounded">
            <div className="bg-white rounded p-10 mr-[20px]">
              <div className="flex">
                <Image src={safe} className="w-[30px]" />
                <h1>Safety</h1>
              </div>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                nam modi repellat quos quis dolorum nobis iste voluptate tenetur
              </p>
              <p className="text-[12px] mt-[10px]">Top Brand</p>
              <div className="flex space-x-5 mt-[10px]">
                <Image src={b1} className="w-[50px]" />
                <Image src={b2} className="w-[50px]" />
                <Image src={b3} className="w-[50px]" />
                <Image src={b4} className="w-[50px]" />
              </div>
            </div>
            <div className="bg-white rounded p-10 mr-[20px]">
              <div className="flex">
                <Image src={paint} className="w-[30px]" />
                <h1>plumbing</h1>
              </div>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                nam modi repellat quos quis dolorum nobis iste voluptate tenetur
              </p>
              <p className="text-[12px] mt-[10px]">Top Brand</p>
              <div className="flex space-x-5 mt-[10px]">
                <Image src={b1} className="w-[50px]" />
                <Image src={b2} className="w-[50px]" />
                <Image src={b3} className="w-[50px]" />
                <Image src={b4} className="w-[50px]" />
              </div>
            </div>
            <div className="bg-white rounded p-10 mr-[20px]">
              <div className="flex">
                <Image src={wood} className="w-[30px]" />
                <h1>hardware</h1>
              </div>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                nam modi repellat quos quis dolorum nobis iste voluptate tenetur
              </p>
              <p className="text-[12px] mt-[10px]">Top Brand</p>
              <div className="flex space-x-5 mt-[10px]">
                <Image src={b1} className="w-[50px]" />
                <Image src={b2} className="w-[50px]" />
                <Image src={b3} className="w-[50px]" />
                <Image src={b4} className="w-[50px]" />
              </div>
            </div>
            <div className="bg-white rounded p-10 mr-[20px]">
              <div className="flex">
                <Image src={safe} className="w-[30px]" />
                <h1>Safety</h1>
              </div>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                nam modi repellat quos quis dolorum nobis iste voluptate tenetur
              </p>
              <p className="text-[12px] mt-[10px]">Top Brand</p>
              <div className="flex space-x-5 mt-[10px]">
                <Image src={b1} className="w-[50px]" />
                <Image src={b2} className="w-[50px]" />
                <Image src={b3} className="w-[50px]" />
                <Image src={b4} className="w-[50px]" />
              </div>
            </div>
            <div className="bg-white rounded p-10 mr-[20px]">
              <div className="flex">
                <Image src={paint} className="w-[30px]" />
                <h1>Safety</h1>
              </div>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                nam modi repellat quos quis dolorum nobis iste voluptate tenetur
              </p>
              <p className="text-[12px] mt-[10px]">Top Brand</p>
              <div className="flex space-x-5 mt-[10px]">
                <Image src={b1} className="w-[50px]" />
                <Image src={b2} className="w-[50px]" />
                <Image src={b3} className="w-[50px]" />
                <Image src={b4} className="w-[50px]" />
              </div>
            </div>
            <div className="bg-white rounded p-10 mr-[20px]">
              <div className="flex">
                <Image src={wood} className="w-[30px]" />
                <h1>Safety</h1>
              </div>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                nam modi repellat quos quis dolorum nobis iste voluptate tenetur
              </p>
              <p className="text-[12px] mt-[10px]">Top Brand</p>
              <div className="flex space-x-5 mt-[10px]">
                <Image src={b1} className="w-[50px]" />
                <Image src={b2} className="w-[50px]" />
                <Image src={b3} className="w-[50px]" />
                <Image src={b4} className="w-[50px]" />
              </div>
            </div>
            <div className="bg-white rounded p-10 mr-[20px]">
              <div className="flex">
                <Image src={paint} className="w-[30px]" />
                <h1>Safety</h1>
              </div>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                nam modi repellat quos quis dolorum nobis iste voluptate tenetur
              </p>
              <p className="text-[12px] mt-[10px]">Top Brand</p>
              <div className="flex space-x-5 mt-[10px]">
                <Image src={b1} className="w-[50px]" />
                <Image src={b2} className="w-[50px]" />
                <Image src={b3} className="w-[50px]" />
                <Image src={b4} className="w-[50px]" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="w-full bg-red-900 flex  justify-between px-[60px] py-[40px] my-[50px]">
        <div>
          {" "}
          <h1 className="text-white text-[30px]">2000+ Product Catalogs</h1>
          <p className="text-white">
            Want to browse what’s best for your next project? We got you
            covered!
          </p>
        </div>
        <div className="bg-[url('../img/brands.png')] bg-contain w-[300px] bg-no-repeat py-[30px]">
          <button className="bg-red-600 text-white rounded px-[30px] py-[10px] hover:bg-white hover:text-red-600">
            View Catalogs
          </button>
        </div>
      </div>
    </>
  );
}
