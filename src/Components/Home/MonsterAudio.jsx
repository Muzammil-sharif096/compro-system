import React, { useState } from "react";
import data from "../../Data";

const MonsterAudio = () => {
  const Monster = data.filter((items) => items.brand == "MONSTER");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="bg-neutral-100 px-16 py-8">
        <div className="flex justify-between items-center mb-8">
          <p className="font-medium text-xl text-primary">
            Monster Audio Store
          </p>
          <p className="text-cyan-500 text-sm font-medium tracking-wide cursor-pointer hover:underline">
            View all
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {Monster.map((ele, index) => (
            <div key={index} className="flex border bg-white p-4">
              <div className="w-1/4 pb-8">
                <img
                  src={hoveredIndex === index ? ele.img2 : ele.img}
                  alt=""
                  className="w-full h-full object-cover"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </div>
              <div className="pl-4 flex flex-col justify-between">
                <p className="text-gray-500 text-[12px]">{ele.category}</p>
                <p className="font-medium text-[15px] text-primary">
                  {ele.title}
                </p>
                <div className="flex gap-2">
                  <div className="bg-black w-4 h-4"></div>
                  <div className="bg-blue-600 w-4 h-4"></div>
                  <div className="bg-green-600 w-4 h-4"></div>
                  <div className="bg-yellow-500 w-4 h-4"></div>
                </div>
                <div className="flex items-center gap-5 pt-3">
                  <p className="text-red-500 text-lg font-medium">
                    Rs.{ele.price}
                  </p>
                  <p className="text-[14px] text-neutral-500 font-medium line-through ">
                    Rs.{ele.delprice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MonsterAudio;
