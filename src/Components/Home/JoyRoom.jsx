import React, { useState } from "react";
import data from "../../Data";
import { Link } from "react-router-dom";

const JoyRoom = () => {
  const joyRoom = data.filter((items) => items.brand === "JOYROOM");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-neutral-100 py-10 px-16">
      <div className="flex justify-between items-center mb-8">
        <p className="font-medium text-xl text-primary">JOYROOM</p>
        <p className="text-secondary text-sm font-medium tracking-wide cursor-pointer hover:underline">
          View all
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {joyRoom.map((ele, index) => (
          <Link to={`/detail_product/${ele.id}`} key={index}>
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
              <div>
                <h1 className="text-[12px] text-neutral-700 mb-2">
                  {ele.brand}
                </h1>
                <p className="text-primary font-medium text-[14px]">
                  {ele.title}
                </p>
              </div>
              <div className="flex items-center gap-5 pt-3">
                <p
                  className={`text-lg font-medium ${
                    index === 0 ? "text-red-500" : "text-cyan-500"
                  }`}
                >
                  Rs.{ele.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JoyRoom;
