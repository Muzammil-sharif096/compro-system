import React, { useState } from "react";

const ProductDay = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const proDay = {
    id: 158,
    img: "/assets/img/landingimg1.webp",
    img2: "/assets/img/landingimg1hover.webp",
    brand: "Compro System",
    category: "AllProducts",
    title: "Lenovo Monster XKT10 Gaming Noise Reduction Earphones-",
    price: 2999,
    delprice: 5000,
    images: [
      "/assets/img/landingimg2.webp",
      "/assets/img/landingimg3.webp",
      "/assets/img/landingimg4.webp",
      "/assets/img/landingimg4.webp",
      "/assets/img/landingimg3.webp",
    ],
    description:
      "Support PD3.0 QC3.0, AFC, FCP, SCP, PE quick charge protocols. It can charge 3 devices simultaneously and you can share it with your family and friends. 3.0A fast charging speed ensures 4.4 times faster than an ordinary power bank, greatly shortening the charging time for your phones 30000mAh power bank can charge most phones 8-10 times and other USB devices multiple times for an average of 9 days of unrestrained usage per charge, and no need to worry about losing contact with anyone due to being out of power.",
  };

  return (
    <div className="bg-neutral-100 lg:px-16 px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <p className="font-medium text-xl text-primary">Product of the day</p>
        <p className="text-secondary text-sm font-medium tracking-wide cursor-pointer hover:underline">
          View all
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 bg-white">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          <div className="px-4 py-4 lg:py-0 col-span-1 flex lg:flex-col flex-row lg:space-y-4 space-x-4 lg:space-x-0">
            {proDay.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product image ${index + 2}`}
                className="w-20 lg:w-full cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
          <div className="border-r col-span-3 flex justify-center items-center">
            <img
              src={
                hoveredIndex !== null ? proDay.images[hoveredIndex] : proDay.img
              }
              alt="Main product"
              className="w-full p-4"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-5">
          <div className="flex flex-col space-y-4 items-start">
            <div className="pb-7 border-b">
              <h2 className="text-[20px] lg:text-[25px] font-semibold text-primary">
                {proDay.title}
              </h2>
            </div>

            <div>
              <p className="font-medium">
                <span className="text-primary font-medium">Color :</span>{" "}
                {selectedColor}
              </p>
              <div className="flex gap-2 pt-5 pb-6">
                <div
                  style={{
                    backgroundColor: "blue",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleColorClick("Blue")}
                ></div>
                <div
                  style={{
                    backgroundColor: "green",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleColorClick("Green")}
                ></div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-red-500 font-medium text-2xl">
                <span className="text-primary text-sm font-medium">Price:</span>{" "}
                Rs {proDay.price}
              </p>
              <p className="text-gray-500 text-lg line-through">
                Rs.{proDay.delprice}
              </p>
            </div>
            <button className="bg-secondary text-white bg-secondery font-medium py-2.5 lg:px-24 w-full lg:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDay;
