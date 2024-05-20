import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const productDetail = data.find((item) => item.id == id);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>
      <div className="flex items-center text-[13px] justify-between bg-neutral-100 text-neutral-600 px-4 lg:px-16 py-5">
        <div className="flex items-center">
          <Link to="/" className="hover:text-secondary duration-150">
            Home
          </Link>
          <MdKeyboardArrowRight className="text-lg mx-2" />
          <p>{productDetail.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Next</p>
          <MdKeyboardArrowRight className="text-lg" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-4 lg:px-16  bg-neutral-100">
        <div className="flex flex-col gap-5 bg-white lg:w-1/2 p-4">
          <section className="flex gap-4">
            <div className="flex flex-col  space-y-4">
              {productDetail.images.map((ele, index) => (
                <div key={index} className="w-16">
                  <img
                    src={ele}
                    alt={`Product image ${index + 1}`}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center flex-1">
              <img src={productDetail.img} alt="Main product" className="" />
            </div>
          </section>
          <div className="grid grid-cols-1 gap-4 mt-4">
            {productDetail.images.slice(0, 3).map((img, index) => (
              <div key={index} className="w-full h-full">
                <img
                  src={img}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 lg:mt-0 lg:ml-8 lg:w-1/2">
          <div className="flex flex-col items-start space-y-4 sticky top-0 p-5 bg-white border border-gray-300">
            <div className="border-b pb-4">
              <h2 className="text-[28px] font-semibold text-primary">
                {productDetail.title}
              </h2>
              <p className="text-sm text-secondary font-medium py-2">
                {productDetail.brand}
              </p>
            </div>

            <div className="flex space-x-4">
              <p className="text-red-500 font-medium text-2xl">
                <span className="text-primary text-sm font-medium">Price:</span>{" "}
                Rs {productDetail.price}
              </p>
              <p className="text-gray-500 text-lg line-through">
                Rs.{productDetail.delprice}
              </p>
            </div>
            <p className="flex items-center gap-2 text-primary font-medium">
              Stock:
              <div className="bg-green-600 w-2.5 h-2.5 rounded-full"></div>
              <span className="text-green-700">In Stock</span>
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-primary font-medium">Quantity:</p>
              <select
                value={quantity}
                onChange={handleQuantityChange}
                className="py-2 w-16 outline-none border pl-2 text-primary"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-x-5">
              <button className="text-white bg-secondery py-2.5 lg:px-24">
                Add to Cart
              </button>
              <button className="text-white bg-primary py-2.5 lg:px-24 ">
                Buy it now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <p className="text-neutral-500 text-center py-16 text-xl font-medium">
          YOU MAY ALSO LIKE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-16 gap-5">
          {data.slice(5, 11).map((ele, index) => (
            <Link to={`/detail_product/${ele.id}`} key={index}>
              <div className="border bg-white p-4 flex flex-col h-full">
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
                <div className="flex-grow flex flex-col justify-between pt-3">
                  <div className="flex items-center gap-3">
                    <p className="text-red-500 text-lg font-medium">
                      Rs.{ele.price}
                    </p>
                    <p className="text-[14px] text-neutral-500 font-medium line-through">
                      Rs.{ele.delprice}
                    </p>
                  </div>
                  <button className="text-white bg-secondery py-2">
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-primary px-16 pb-10 pt-20 text-xl font-medium">
          Recently viewed
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-16 gap-5 pb-5">
          {data.slice(15, 21).map((ele, index) => (
            <Link to={`/detail_product/${ele.id}`} key={index}>
              <div className="border bg-white p-4 flex flex-col h-full">
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
                <div className="flex items-center gap-5 pt-3 flex-grow">
                  <div className="flex items-center gap-5">
                    <p className="text-red-500 text-lg font-medium">
                      Rs.{ele.price}
                    </p>
                    <p className="text-[14px] text-neutral-500 font-medium line-through">
                      Rs.{ele.delprice}
                    </p>
                  </div>
                </div>
                <button className="text-white bg-secondery py-2 flex-grow-0">
                  Add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
