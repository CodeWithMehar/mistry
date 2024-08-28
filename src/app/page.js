import Image from "next/image";
import bg1 from "../img/bg.gif";
import h1 from "../img/h1.svg";
import h2 from "../img/h2.svg";
import h3 from "../img/h3.svg";
import h4 from "../img/h4.svg";
import order from "../img/o.svg";
import b from "../img/b.svg";
import arrow from "../img/2ar.svg";
import main from "../img/main.svg";
import c1 from "../img/c1.svg";
import c2 from "../img/c2.svg";
import c3 from "../img/c3.svg";
import c4 from "../img/c4.svg";
import ss from "../img/ss.png";
import Work from "./Work";
import { FaArrowRight } from "react-icons/fa";
import Category from "./Category";
import Testimonial from "./Testimonial";
import Header from "./Header";

export default function Home() {
  return (
    <>
   <Header/>
      <div className="bg-[url('../img/bg.gif')] bg-cover bg-no-repeat h-[130vh] mt-[-90px] -z-20">
        <div className="w-full h-[130vh] bg-red-600 -z-30 bg-opacity-40 ">
          <div className="pt-[230px] w-[1100px] mx-auto text-white">
            <h1 className="text-[40px] font-bold">
              Unlock Smart Credit for Seamless Sourcing
            </h1>
            <p className="py-10">
              Scale Your Projects with India’s First Interest-Free Credit along
              with Simplified <br /> Material Purchases, exclusively for
              Interior Professionals
            </p>
            <div className="flex space-x-3">
              <div>
                <Image src={h1} />
                <h1 className="pt-3">
                  Interest-Free <br />
                  Credit up to 60 <br /> days
                </h1>
              </div>
              <div>
                <Image src={h2} />
                <h1 className="pt-3">
                  Enjoy <br /> Guaranteed <br /> Savings
                </h1>
              </div>
              <div>
                <Image src={h3} />
                <h1 className="pt-3">
                  Unlock Business <br /> Growth
                </h1>
              </div>
              <div>
                <Image src={h4} />
                <h1 className="pt-3">
                  Build Market <br /> Reputation
                </h1>
              </div>
            </div>
            <div className="text-white mt-5">
              <button className="bg-red-500 rounded py-2 px-5 text-[14px]">
                Sign Up For Credit
              </button>
              <a className="underline pl-5">Know More</a>
            </div>
          </div>
          <div className="flex justify-between px-5">
            <Image
              src={b}
              className="bg-red-500 rounded-full p-2 fixed top-[83vh] left-[50px] w-[60px] z-[9999]"
            />

            <Image
              src={order}
              className="bg-red-600 p-3 h-[60px] w-[60px] rounded-3xl mt-5 fixed top-[80vh] right-[50px] z-[9999] "
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src={ss}
          className="w-[900px] h-[120px] rounded-3xl absolute right-0 top-[100vh] mb-5"
        />
      </div>
      <div className="w-full flex justify-between mt-[100px]  px-[38px] bg-[#F3F3F3] py-[20px]">
        <div>
          <Image src={main} className="w-[470px] h-[470px]" />
        </div>
        <div>
          <div className="flex">
            <div>
              <Image src={arrow} />
            </div>
            <div>
              <h1 className="text-[28px] font-light mt-[12px]">
                <span className="text-red-600 font-bold">Mistry.Store</span> is
                Redifining the
                <span className="font-bold">
                  {" "}
                  Building Material <br /> Industry
                </span>{" "}
                with
                <span className="font-bold"> Credit Line</span>
              </h1>
              <div className="flex mt-[100px] w-[400px] mx-auto space-x-11">
                <div className="text-center">
                  <Image src={c1} />
                  <h1>Seamless Sourcing</h1>
                </div>
                <div className="text-center">
                  <Image src={c2} />
                  <h1>Safe & Secure Payments</h1>
                </div>
                <div className="text-center">
                  <Image src={c3} />
                  <h1>100% Authentic Products</h1>
                </div>
                <div className="text-center">
                  <Image src={c4} />
                  <h1>Dedicated Relationship Manager</h1>
                </div>
              </div>
              <div className="text-white mt-[60px] flex-col flex space-y-3 ml-[200px]">
                <button className="bg-red-500 rounded py-3 w-[170px]  text-[14px]">
                  Sign Up For Credit
                </button>
                <a className="underline pl-5 text-red-600">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category />
      <Work />
      <Testimonial/>
    </>
  );
}
