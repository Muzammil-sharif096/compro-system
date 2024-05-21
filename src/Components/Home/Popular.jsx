import React, { useState, useEffect } from "react";
import data from "../../Data";
import { Link } from "react-router-dom";

const Popular = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardHeight, setCardHeight] = useState("auto");

  useEffect(() => {
    const maxHeight = Math.max(
      ...Array.from(document.querySelectorAll(".popular-card")).map(
        (card) => card.clientHeight
      )
    );
    setCardHeight(maxHeight);
  }, [hoveredIndex]); // Update when hoveredIndex changes

  const filterPopular = data.filter((item) =>
    item.category.includes("popular")
  );

  return (
    <div className="bg-neutral-100 lg:px-16 px-2 py-8">
      <div className="flex justify-between items-center mb-8">
        <p className="font-medium text-xl text-primary">
          Weekly Picks From Our Most Popular Categories
        </p>
      </div>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        style={{ minHeight: cardHeight }}
      >
        {filterPopular.map((ele, index) => (
          <Link
            to={`/detail_product/${ele.id}`}
            key={index}
            className="flex flex-col h-full"
          >
            <div className="popular-card flex border bg-white p-4 flex-1">
              <div className="w-1/4 pb-8">
                <img
                  src={hoveredIndex === index ? ele.img2 : ele.img}
                  alt={ele.title}
                  className="w-full h-full object-cover"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </div>
              <div className="pl-4 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-gray-500 text-[12px]">{ele.brand}</p>
                  <p className="font-medium text-[15px] text-primary">
                    {ele.title}
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="bg-black w-4 h-4"></div>
                  <div className="bg-blue-600 w-4 h-4"></div>
                  <div className="bg-green-600 w-4 h-4"></div>
                  <div className="bg-yellow-500 w-4 h-4"></div>
                </div>
                <div className="flex items-center gap-5 pt-3 mt-auto">
                  <p className="text-lg font-medium text-red-500">
                    Rs.{ele.price}
                  </p>
                  {ele.delprice && (
                    <p className="text-[14px] text-neutral-500 font-medium line-through">
                      Rs.{ele.delprice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
