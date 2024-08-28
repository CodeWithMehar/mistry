"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import blog from "../img/blog.webp";
import blog1 from "../img/blog1.webp";
import blog2 from "../img/blog2.webp";
import Image from "next/image";
import mi1 from "../img/mi1.jpeg";
import mi2 from "../img/mi2.jpg";
import mi3 from "../img/mi3.jpg";
import Header from "./Header";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
    <Header/>
      <div className="w-full bg-[#F3F3F3] py-[40px] px-[50px]">
        <h1 className="text-[40px] font-semibold my-5">
          What our Professionals say about us!
        </h1>
        <Slider {...settings} className="slide2">
          <div>
            <h3 className="text-center font-bold">Ashok Sharma</h3>
            <h3 className="text-[10px] text-center">New Delhi</h3>
            <p className="text-[12px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo nam expedita illo architecto eaque sequi cumque. Alias,
              inventore saepe iusto sit qui cum neque doloribus odit quae
              similique provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id totam quia necessitatibus eius, repudiandae
              nam adipisci reprehenderit! Necessitatibus, ratione quae
              laboriosam iste magni facilis, praesentium eius debitis
              reprehenderit perspiciatis tempore!
            </p>
          </div>
          <div>
            <h3 className="text-center font-bold">Ashok Sharma</h3>
            <h3 className="text-[10px] text-center">New Delhi</h3>
            <p className="text-[12px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo nam expedita illo architecto eaque sequi cumque. Alias,
              inventore saepe iusto sit qui cum neque doloribus odit quae
              similique provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id totam quia necessitatibus eius, repudiandae
              nam adipisci reprehenderit! Necessitatibus, ratione quae
              laboriosam iste magni facilis, praesentium eius debitis
              reprehenderit perspiciatis tempore!
            </p>
          </div>
          <div>
            <h3 className="text-center font-bold">Ashok Sharma</h3>
            <h3 className="text-[10px] text-center">New Delhi</h3>
            <p className="text-[12px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo nam expedita illo architecto eaque sequi cumque. Alias,
              inventore saepe iusto sit qui cum neque doloribus odit quae
              similique provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id totam quia necessitatibus eius, repudiandae
              nam adipisci reprehenderit! Necessitatibus, ratione quae
              laboriosam iste magni facilis, praesentium eius debitis
              reprehenderit perspiciatis tempore!
            </p>
          </div>
          <div>
            <h3 className="text-center font-bold">Ashok Sharma</h3>
            <h3 className="text-[10px] text-center">New Delhi</h3>
            <p className="text-[12px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo nam expedita illo architecto eaque sequi cumque. Alias,
              inventore saepe iusto sit qui cum neque doloribus odit quae
              similique provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id totam quia necessitatibus eius, repudiandae
              nam adipisci reprehenderit! Necessitatibus, ratione quae
              laboriosam iste magni facilis, praesentium eius debitis
              reprehenderit perspiciatis tempore!
            </p>
          </div>
          <div>
            <h3 className="text-center font-bold">Ashok Sharma</h3>
            <h3 className="text-[10px] text-center">New Delhi</h3>
            <p className="text-[12px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo nam expedita illo architecto eaque sequi cumque. Alias,
              inventore saepe iusto sit qui cum neque doloribus odit quae
              similique provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id totam quia necessitatibus eius, repudiandae
              nam adipisci reprehenderit! Necessitatibus, ratione quae
              laboriosam iste magni facilis, praesentium eius debitis
              reprehenderit perspiciatis tempore!
            </p>
          </div>
          <div>
            <h3 className="text-center font-bold">Ashok Sharma</h3>
            <h3 className="text-[10px] text-center">New Delhi</h3>
            <p className="text-[12px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo nam expedita illo architecto eaque sequi cumque. Alias,
              inventore saepe iusto sit qui cum neque doloribus odit quae
              similique provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id totam quia necessitatibus eius, repudiandae
              nam adipisci reprehenderit! Necessitatibus, ratione quae
              laboriosam iste magni facilis, praesentium eius debitis
              reprehenderit perspiciatis tempore!
            </p>
          </div>
          <div>
            <h3 className="text-center font-bold">Ashok Sharma</h3>
            <h3 className="text-[10px] text-center">New Delhi</h3>
            <p className="text-[12px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo nam expedita illo architecto eaque sequi cumque. Alias,
              inventore saepe iusto sit qui cum neque doloribus odit quae
              similique provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id totam quia necessitatibus eius, repudiandae
              nam adipisci reprehenderit! Necessitatibus, ratione quae
              laboriosam iste magni facilis, praesentium eius debitis
              reprehenderit perspiciatis tempore!
            </p>
          </div>
          <div>
            <h3 className="text-center font-bold">Ashok Sharma</h3>
            <h3 className="text-[10px] text-center">New Delhi</h3>
            <p className="text-[12px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo nam expedita illo architecto eaque sequi cumque. Alias,
              inventore saepe iusto sit qui cum neque doloribus odit quae
              similique provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id totam quia necessitatibus eius, repudiandae
              nam adipisci reprehenderit! Necessitatibus, ratione quae
              laboriosam iste magni facilis, praesentium eius debitis
              reprehenderit perspiciatis tempore!
            </p>
          </div>
        </Slider>
      </div>
      {/* blog section */}
      <div className="w-full py-[30px] px-[60px]">
        <h1 className="text-[40px] mb-[20px] font-bold">Blogs</h1>
        <div className="flex space-x-5">
          <div className="w-[23%] rounded-xl shadow-xl">
            <Image src={blog} className="rounded-xl" />
            <p className="font-bold text-25px py-[15px] px-[20px]">
              How ‘Select my Designer’ simplifies your search for an ideal
              interior designer?
            </p>
            <p className=" px-[20px] py-[15px] font-bold text-red-600 flex">
              Read More <IoIosArrowRoundForward className="text-[30px]" />
            </p>
          </div>
          <div className="w-[23%] rounded-xl shadow-xl">
            <Image src={blog1} className="rounded-xl" />
            <p className="font-bold text-25px py-[15px] px-[20px]">
              How ‘Select my Designer’ simplifies your search for an ideal
              interior designer?
            </p>
            <p className=" px-[20px] py-[15px] font-bold text-red-600 flex">
              Read More <IoIosArrowRoundForward className="text-[30px]" />
            </p>
          </div>
          <div className="w-[23%] rounded-xl shadow-xl">
            <Image src={blog2} className="rounded-xl" />
            <p className="font-bold text-25px py-[15px] px-[20px]">
              How ‘Select my Designer’ simplifies your search for an ideal
              interior designer?
            </p>
            <p className=" px-[20px] py-[15px] font-bold text-red-600 flex">
              Read More <IoIosArrowRoundForward className="text-[30px]" />
            </p>
          </div>
        </div>
      </div>
      {/* news section */}
      <div className="w-full py-[30px] px-[60px] bg-[#F3F3F3]">
        <h1 className="text-[40px] mb-[20px] font-bold">Mistry.Store in News</h1>
        <div className="flex space-x-5">
          <div className="w-[23%] rounded-xl shadow-xl">
            <Image src={mi3} className="rounded-xl" />
            <p className="font-bold text-25px py-[15px] px-[20px]">
              How ‘Select my Designer’ simplifies your search for an ideal
              interior designer?
            </p>
            <p className=" px-[20px] py-[15px] font-bold text-red-600 flex">
              Read More <IoIosArrowRoundForward className="text-[30px]" />
            </p>
          </div>
          <div className="w-[23%] rounded-xl shadow-xl">
            <Image src={mi1} className="rounded-xl" />
            <p className="font-bold text-25px py-[15px] px-[20px]">
              How ‘Select my Designer’ simplifies your search for an ideal
              interior designer?
            </p>
            <p className=" px-[20px] py-[15px] font-bold text-red-600 flex">
              Read More <IoIosArrowRoundForward className="text-[30px]" />
            </p>
          </div>
          <div className="w-[23%] rounded-xl shadow-xl">
            <Image src={mi2} className="rounded-xl" />
            <p className="font-bold text-25px py-[15px] px-[20px]">
              How ‘Select my Designer’ simplifies your search for an ideal
              interior designer?
            </p>
            <p className=" px-[20px] py-[15px] font-bold text-red-600 flex">
              Read More <IoIosArrowRoundForward className="text-[30px]" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
