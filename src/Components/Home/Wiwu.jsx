import React, { useState } from "react";
import data from "../../Data";
import { Link } from "react-router-dom";

const Wiwu = () => {
  const wiwu = data.filter((items) => items.brand === "WIWU");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      <div className="bg-neutral-100 py-10 lg:px-16 px-2">
        <div className="flex justify-between items-center mb-8">
          <p className="font-medium text-xl text-primary">WIWU</p>
          <p className="text-secondary text-sm font-medium tracking-wide cursor-pointer hover:underline">
            View all
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {wiwu.map((ele, index) => (
            <Link
              to={`/detail-product/${ele.title
                .toLowerCase()
                .replace(/[\s:]+/g, "-")}`}
              key={index}
              onClick={scrollTop}
            >
              <div className="border bg-white p-4 flex flex-col justify-between h-full">
                <div className="flex justify-center mb-4">
                  <img
                    src={hoveredIndex === index ? ele.img2 : ele.img}
                    alt={ele.title}
                    className="w-48 h-48 object-cover"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                </div>
                <div className="flex-grow">
                  <h1 className="text-[12px] text-neutral-700 mb-2">
                    {ele.brand}
                  </h1>
                  <p className="text-primary font-medium text-[14px]">
                    {ele.title}
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-3 mt-auto">
                  <p
                    className={`text-lg font-medium ${
                      index === 1 || index === 5
                        ? "text-cyan-500"
                        : "text-red-500"
                    }`}
                  >
                    Rs.{ele.price}
                  </p>
                  {index !== 1 && index !== 5 && (
                    <p className="text-[14px] text-neutral-500 font-medium line-through">
                      Rs.{ele.delprice}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wiwu;
