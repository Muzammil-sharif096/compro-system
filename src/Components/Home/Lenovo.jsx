import React, { useState } from "react";
import data from "../../Data";
import { Link } from "react-router-dom";

const Lenovo = () => {
  const lenovo = data.filter((ele) => ele.brand == "LENOVO");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div>
        <img src="/assets/img/sportlight.webp" alt="" className="w-full" />
      </div>

      <div className="bg-neutral-100  lg:px-16 px-5 py-10">
        <p className="font-medium text-xl text-primary">Top Brands</p>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 pt-6">
          <div className="bg-white px-10 border py-7">
            <img src="/assets/img/lenovo-logo.avif" alt="" />
          </div>
          <div className="bg-white px-10 border py-7">
            <img src="/assets/img/havit-logo.avif" alt="" />
          </div>
          <div className="bg-white px-10 border py-7">
            <img src="/assets/img/monster-logo.avif" alt="" className="mt-4" />
          </div>
          <div className="bg-white px-10 border py-7">
            <img src="/assets/img/Baseus_logo (2).avif" alt="" />
          </div>
          <div className="bg-white px-10 border py-7">
            <img src="/assets/img/wiwu_logo.avif" alt="" />
          </div>
          <div className="bg-white px-10 border py-7">
            <img src="/assets/img/Joyroom-logo.avif" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-neutral-100  py-10  lg:px-16 px-2">
        <div className="flex justify-between items-center  mb-8">
          <p className="font-medium text-xl text-primary">
            Lenovo Audio Equipment
          </p>
          <p className="text-secondery text-sm font-medium tracking-wide cursor-pointer hover:underline">
            View all Lenovo earbuds
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {lenovo.map((ele, index) => (
            <Link
              to={`/detail-product/${ele.title
                .toLowerCase()
                .replace(/[\s:]+/g, "-")}`}
                onClick={scrollTop}
            >
              <div
                key={index}
                className="border bg-white p-4 flex flex-col h-full"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={hoveredIndex === index ? ele.img2 : ele.img}
                    alt={ele.title}
                    className="w-48 h-48 object-cover"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                </div>
                <h1 className="text-[12px] text-neutral-700 mb-2">
                  {ele.brand}
                </h1>
                <p className="text-primary font-medium text-[14px]">
                  {ele.title}
                </p>
                <div className="flex items-center gap-5 pt-3">
                  <p className="text-red-500 text-lg font-medium">
                    Rs.{ele.price}
                  </p>
                  <p className="text-[14px] text-neutral-500 font-medium line-through">
                    Rs.{ele.delprice}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lenovo;
