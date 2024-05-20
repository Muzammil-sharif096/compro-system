import React from "react";
import { useParams } from "react-router-dom";
import data from "../../Data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const productDetail = data.filter((item) => item.id == id)[0];

  return (
    <>
      <div className="flex items-center text-[13px] justify-between bg-neutral-100 text-neutral-600 px-16">
        <div className="flex items-center">
          <Link to="/" className="hover:text-secondery duration-150">
            Home
          </Link>
          <MdKeyboardArrowRight className="text-lg" />
          <p>{productDetail.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Next</p>
          <MdKeyboardArrowRight className="text-lg" />
        </div>
      </div>

      <div className="px-16 flex gap-10 bg-neutral-100">
        <div className="bg-white grid grid-cols-3 border">
          <div className="col-span-1">
            {productDetail.images.map((ele) => (
              <img src={ele} alt="" srcset="" />
            ))}
          </div>

          <div className="col-span-2">
            <img src={productDetail.img} alt="" className="w-full" srcset="" />
          </div>
        </div>
        <div className="bg-white col">
          <div>
            <p className="text-2xl font-medium text-primary">
              {productDetail.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
