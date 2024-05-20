import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../Data'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { LuBarChart } from "react-icons/lu";
import { FaTimes } from 'react-icons/fa';
const AllItems = () => {
    const { category } = useParams()
    const filterdata = data.filter((item) => item.category === category)
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [style, setStyle] = useState('grid');
    const [showDiv1, setShowDiv1] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    console.log(selectedProduct);
    let categoryText = '';
    switch (category) {
        case 'Routers':
            categoryText = 'Here you can find all Routers and Range extenders listed on Compro System';
            break;
        case 'WireLessAirBurds':
            categoryText = 'Wireless Earbuds | True Wireless Stereo Earphones (TWS) | AirPods';
            break;
        case 'HeadPhone':
            categoryText = 'headphone';
            break;
        case 'EarPhone':
            categoryText = 'Earphones | Handsfree | Neckbands';
            break;
        case 'PowerBank':
            categoryText = ' Power Bank';
            break;
        case 'AllProducts':
            categoryText = ' All Products';
            break;
        default:
            break;
    }

    return (
        <div className='bg-[#f3f5f6] py-12 p-2'>
            <div className='flex justify-center gap-12'>
                <div className='2xl:block hidden bg-white h-max w-72 px-4 py-5 space-y-3'>
                    <h1 className='text-2xl font-bold text-primary'>Filters</h1>
                    <h2 className='text-primary font-semibold'>Vendor</h2>
                    <ul className='px-2 space-y-2'>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>HUAWEI</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>Mercusys</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>MT-LINK</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>Tenda</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>TP-LINK</h3>
                        </li>
                    </ul>
                    <h2 className='text-primary font-semibold'>Type</h2>
                    <ul className='px-2 space-y-2'>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>ROUTER</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>WIFI RANGE EXTENDER</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>WIRELESS ADAPTER</h3>
                        </li>
                    </ul>
                    <h2 className='text-primary font-semibold'>Price</h2>
                    <ul className='px-2 space-y-2'>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>Rs.10000 - Rs.20000</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>Rs.20000 - Rs.50000</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>Rs.1000 - Rs.2500</h3>
                        </li>
                        <li className='flex  gap-3'>
                            <input type="checkbox" name="" id="" />
                            <h3>Rs.2500 - Rs.5000</h3>
                        </li>
                    </ul>
                </div>
                <div className='border bg-white'>
                    {
                        category == "Routers" && (
                            <div className='router p-32'></div>
                        )
                    }
                    <div className='px-6 py-6 space-y-3'>
                        {
                            category == "Routers" && (
                                <h1 className='font-bold text-3xl text-primary'>Routers</h1>
                            )
                        }
                        <p className='font-semibold text-2xl text-primary'>{categoryText}</p>
                        {
                            category == "Routers" && (
                                <>
                                    <h3 className='text-base text-silver font-bold'>Or Shop by Brand:</h3>
                                    <hr />
                                </>
                            )
                        }
                        {
                            category == "Routers" && (
                                <div className='flex sm:justify-evenly gap-2 items-center pt-6 text-secondery underline'>
                                    <h1>TP-LINK</h1>
                                    <h2>MT-LINK</h2>
                                    <h3>TENDA</h3>
                                    <h4>HUAWEI</h4>
                                </div>
                            )
                        }
                    </div>
                    <hr />
                    <div className='flex justify-between 2xl:px-6 p-2 2xl:py-4 items-center'>
                        <h1 className='text-sm sm:block hidden'>Showing 1 - 24 of 58 products</h1>
                        <h2 className='text-sm sm:block hidden'>Display: 24 per page</h2>
                        <h3 className='text-sm'>Sort by: Featured</h3>
                        <div className='flex cursor-pointer 2xl:w-32 gap-4 items-center'>
                            <h1>View</h1>
                            <FaBars onClick={() => setStyle('grid')} className='text-xl' />
                            <LuBarChart onClick={() => setStyle('flex')} className='text-xl' />
                        </div>
                    </div>
                    {
                        style == 'grid' && (
                            <>
                                <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'>
                                    {
                                        filterdata.map((ele, index) => (
                                            <div key={index} className='2xl:w-72 w-full flex flex-col justify-between border p-4'>
                                                <div>
                                                    <Link to={`/detail_product/${ele.id}`}>
                                                        <img onMouseEnter={() => setHoveredIndex(index)}
                                                            onMouseLeave={() => setHoveredIndex(null)} className='w-full object-cover' src={hoveredIndex === index ? ele.img2 : ele.img} alt={ele.title} />
                                                    </Link>
                                                    <div className='pt-5 space-y-2 cursor-pointer'>
                                                        <h2 className='text-sm text-silver'>{ele.brand}</h2>
                                                        <h2 className='text-base text-primary hover:text-secondery  font-semibold'>{ele.title}</h2>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-3 space-y-2 justify-center'>
                                                    {
                                                        (index === 5 || index === 8 || index === 2 || index === 14) && (
                                                            <div className='mt-2 flex gap-2'>
                                                                <div className='w-6 h-6 bg-yellow-500'></div>
                                                                <div className='w-6 h-6 bg-black'></div>
                                                                <div className='w-6 h-6 bg-green-500'></div>
                                                                <div className='w-6 h-6 bg-blue-500'></div>
                                                            </div>
                                                        )
                                                    }
                                                    <div className='flex gap-2 items-center'>
                                                        <p className={`text-lg font-medium ${index === 3 || index === 7 || index === 9 || index === 13
                                                            ? "text-red-500"
                                                            : "text-cyan-500"
                                                            }`}>Rs. {ele.price}</p>
                                                        <p className='text-base  line-through text-silver'>{ele.delprice}</p>
                                                    </div>
                                                    <button
                                                        className={`w-full p-3 font-bold text-white text-sm ${(index === 3 || index === 9 || index === 6 || index === 12) ? 'bg-secondery' : 'bg-silver'
                                                            }`}
                                                    >
                                                        {(index === 3 || index === 9) ? "Add To Cart" : (index === 6 || index === 12) ? "Choose Option" : "Sold out"}
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setShowDiv1(true);
                                                            setSelectedProduct(ele);
                                                        }}
                                                        className='w-full hover:bg-gray-100 font-bold text-sm border text-secondery p-2'>
                                                        Quick view
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='flex justify-between items-center p-3'>
                                    <h1 className='text-silver tracking-wider font-semibold'>Prevs</h1>
                                    <ul className='flex justify-center gap-3 items-center'>
                                        <li className='bg-secondery px-3 py-1 text-white'>1</li>
                                        <li className='hover:bg-secondery px-3 py-1 hover:text-white'>2</li>
                                        <li className='hover:bg-secondery px-3 py-1 hover:text-white'>3</li>
                                    </ul>
                                    <h1 className='text-primary tracking-wider font-semibold'>Next</h1>
                                </div>
                            </>
                        )
                    }
                    {
                        style == 'flex' && (
                            <div className=''>
                                {
                                    filterdata.map((ele, index) => {
                                        return (
                                            <>
                                                <div className='flex flex-col lg:flex-row border justify-between lg:gap-16 gap-2 p-4 cursor-pointer px-3 items-center'>
                                                    <div className='flex flex-col lg:w-fit w-full  lg:flex-row justify-center  items-center lg:gap-6 gap-2 lg:p-4 p-2'>
                                                        <img onMouseEnter={() => setHoveredIndex(index)}
                                                            onMouseLeave={() => setHoveredIndex(null)} className='lg:w-60 w-full object-cover' src={hoveredIndex === index ? ele.img2 : ele.img} alt={ele.title} />
                                                        <div className='space-y-3 lg:w-fit w-full'>
                                                            <h2 className='text-sm text-silver'>{ele.brand}</h2>
                                                            <h2 className='text-base text-primary hover:text-secondery  font-semibold'>{ele.title}</h2>
                                                            <div className='flex items-center gap-4'>
                                                                <p className={`text-lg font-medium ${index === 3 || index === 7
                                                                    ? "text-red-500"
                                                                    : "text-cyan-500"
                                                                    }`}>Rs. {ele.price}</p>
                                                                <p className='text-base text-silver  line-through'>{ele.delprice}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex lg:justify-center justify-start items-center lg:w-fit w-full  flex-col gap-3'>
                                                        <button
                                                            className={`w-full p-3 font-bold text-white text-sm ${(index === 3 || index === 9 || index === 6 || index === 12) ? 'bg-secondery' : 'bg-silver'
                                                                }`}
                                                        >
                                                            {(index === 3 || index === 9) ? "Add To Cart" : (index === 6 || index === 12) ? "Choose Option" : "Sold out"}
                                                        </button>
                                                        <button className='lg:w-40 w-full hover:bg-gray-100 font-bold text-sm border text-secondery p-2'>Quick view</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='xl:py-12 xl:px-40 p-2 mt-24 space-y-5'>
                <h1 className='text-primary text-2xl font-semibold'>Recently viewed</h1>
                <div className='flex flex-col lg:flex-row justify-center border'>
                    {
                        data.slice(59, 65).map((ele, index) => (
                            <div key={index} className='2xl:w-72 bg-white w-full flex flex-col justify-between border p-4'>
                                <div>
                                    <Link to={`/detail_product/${ele.id}`}>
                                        <img onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)} className='w-full object-cover' src={hoveredIndex === index ? ele.img2 : ele.img} alt={ele.title} />
                                    </Link>
                                    <div className='pt-5 space-y-2 cursor-pointer'>
                                        <h2 className='text-sm text-silver'>{ele.brand}</h2>
                                        <h2 className='text-base text-primary hover:text-secondery  font-semibold'>{ele.title}</h2>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 space-y-2 justify-center'>
                                    {
                                        (index === 5 || index === 8 || index === 2 || index === 14) && (
                                            <div className='mt-2 flex gap-2'>
                                                <div className='w-6 h-6 bg-yellow-500'></div>
                                                <div className='w-6 h-6 bg-black'></div>
                                                <div className='w-6 h-6 bg-green-500'></div>
                                                <div className='w-6 h-6 bg-blue-500'></div>
                                            </div>
                                        )
                                    }
                                    <div className='flex gap-2 items-center'>
                                        <p className={`text-lg font-medium ${index === 3 || index === 7 || index === 9 || index === 13
                                            ? "text-red-500"
                                            : "text-cyan-500"
                                            }`}>Rs. {ele.price}</p>
                                        <p className='text-base  line-through text-silver'>{ele.delprice}</p>
                                    </div>
                                    <button
                                        className={`w-full p-3 font-bold text-white text-sm ${(index === 3 || index === 9 || index === 2 || index === 5) ? 'bg-secondery' : 'bg-silver'
                                            }`}
                                    >
                                        {(index === 3 || index === 9) ? "Add To Cart" : (index === 2 || index === 5) ? "Choose Option" : "Sold out"}
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                showDiv1 && selectedProduct && (
                    <div className='bg-gray-800 bg-opacity-50 fixed inset-0 flex items-center justify-center'>
                        <div className='bg-white p-12 relative flex flex-col justify-evenly gap-12 md:flex-row'>
                            <div className='flex justify-between gap-4'>
                                <div className=''>
                                    {selectedProduct.images.map((image, index) => (
                                        <img
                                            key={index}
                                            className='w-12 md:w-16 cursor-pointer'
                                            src={image}
                                            alt=""
                                            onClick={() => setSelectedProduct({ ...selectedProduct, img: image })}
                                        />
                                    ))}
                                </div>
                                <div>
                                    <img className='w-52 md:w-96' src={selectedProduct.img} alt="" />
                                </div>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div className='space-y-6'>
                                    <h1 className='text-2xl md:text-3xl font-bold'>{selectedProduct.title}</h1>
                                    <h2 className='text-primary font-semibold text-base'>{selectedProduct.brand}</h2>
                                    <hr />
                                    <p className='text-primary font-bold'>Price :<span className='text-2xl text-secondery pl-4 font-semibold'>Rs.{selectedProduct.price}</span></p>
                                    <div className='flex gap-6'>
                                        <h1 className='text-primary font-bold'>Stock</h1>
                                        <h2 className='text-silver font-bold'>Sold out</h2>
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <h1 className='text-primary font-bold'>Quantity :</h1>
                                        <div className='border-2 border-secondery w-16 p-1'>
                                            <select id="Pcatagory" class="border-none w-full outline-none">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className='bg-silver w-52 md:w-60 p-2 text-white font-bold'>Sold out</button>
                                </div>
                                <div className='absolute top-2 text-2xl font-bold right-6 cursor-pointer' onClick={() => setShowDiv1(false)}>X</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AllItems




