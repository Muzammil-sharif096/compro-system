import React from "react";

const ProductDay = () => {
  const proDay = {
    id: 158,
    img: "../assets/img/landingimg1.webp",
    img2: "../assets/img/landingimg1hover.webp",
    brand: "Compro System",
    category: "AllProducts",
    title: "Lenovo Monster XKT10 Gaming Noise Reduction Earphones-",
    price: 8000,
    delprice: 10000,
    images: [
      "/assets/img/lenevoimg2hover.webp",
      "../assets/img/lenevoimg3hover.webp",
      "../assets/img/lenevoimg4hover.webp",
      "../assets/img/lenevoimg5hover.webp",
    ],
    description:
      "Support PD3.0 QC3.0, AFC, FCP, SCP, PE quick charge protocols. It can charge 3 devices simultaneously and you can share it with your family and friends. 3.0A fast charging speed ensures 4.4 times faster than an ordinary power bank, greatly shortening the charging time for your phones 30000mAh power bank can charge most phones 8-10 times and other USB devices multiple times for an average of 9 days of unrestrained usage per charge, and no need to worry about losing contact with anyone due to being out of power.",
  };

  return (
    <>
      <div className="bg-neutral-100 px-16 py-8">
        <div className="flex justify-between items-center mb-8">
          <p className="font-medium text-xl text-primary">Product of the day</p>
          <p className="text-secondary text-sm font-medium tracking-wide cursor-pointer hover:underline">
            View all
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 bg-white">
          <div className="grid lg:grid-cols-5 grid-cols-1">
            <div className="border col-span-1 flex flex-col space-y-4">
              {proDay.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="w-full "
                />
              ))}
            </div>
            <div className="border col-span-4  ">
              <img src={proDay.img} alt="Main product" className="w-full p-4" />
            </div>
          </div>
          <div className="flex flex-col  space-y-4 border p-5 items-start">
            <div className="border-b pb-5">
              <h2 className="text-2xl font-semibold text-primary ">
                {proDay.title}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-red-500 font-medium text-2xl">
                <span className="text-primary text-sm font-medium">Price:</span>{" "}
                Rs {proDay.price}
              </p>
              <p className="text-gray-500 text-lg  line-through">
                Rs.{proDay.delprice}
              </p>
            </div>
            <button className="bg-secondery text-white font-medium py-2.5  lg:px-24 w-full">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDay;
