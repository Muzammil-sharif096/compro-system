import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';



export default function Navbar() {
    const [showinp, setshowinp] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [showNavbar, setShownavbar] = useState(false)


    const handleinp = () => {
        setshowinp(true);
    };
    const handleclose = () => {
        setshowinp(false);
    };

    const handleInputChange = (e) => {
        setSearchText(e.target.value);

        setshowinp(true);
    };
    const open = () => {
        setShownavbar(true)
    }


    return (
        <>
            <div className=' '>
                <div>
                    <div className=' bg-[#00badb] flex justify-center items-center p-2.5'>
                        <p className='  sm:text-[15px] text-sm  font-bold text-white'>Free shipping on all orders above Rs.1000</p>
                    </div>
                    <div className=' bg-[#1b48ab]  flex  md:justify-between  py-3 pb-5 pt-5  gap-4 md:gap-0  px-3 sm:px-0 '>
                        <div className='  lg:w-[20%] sm:w-[35%] w-[50%] flex gap-1 justify-center pl-3'>
                            <button onClick={open} className='  lg:hidden xl:hidden h-12 text-3xl sm:flex flex  sm:justify-center sm:items-center  md:flex justify-center items-center w-14  text-white'>
                                <GiHamburgerMenu />
                            </button>
                            <img src="/img/COMPRO_SYSTEM_1_a5d24fe7-ecb5-4662-954f-f1ea3897469e_200x.png" alt="" />

                            {showNavbar === true && (

                                <div className="fixed h-screen w-full bg-gray-100 inset-0 right-0  z-[99999] duration-300 flex flex-col justify-center items-center ">
                                    <button className='text-[#677279] absolute top-5 right-5 text-2xl' onClick={() => setShownavbar(false)}>X</button>
                                    <ul className="text-[#677279] text-lg">
                                        <li>Home</li>
                                        <li>Categories</li>
                                        <li>Gaming</li>
                                        <li>Brands</li>
                                        <li>Blogs</li>
                                        <li>Track Order</li>
                                        <li>About Us</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            )}

                        </div>
                        <div className='    lg:w-[70%] sm:w-[60%] w-[50%]   flex  justify-end sm:justify-start  items-center px-2 sm:px-0 '>
                            <input type="text" name="" id="" placeholder='search...' className=' h-11  rounded-l-sm w-[91%]  outline-none pl-3 placeholder:text-[#677279] hidden sm:block' />
                            <button className=' sm:bg-[#00badb] h-11 w-14 sm:flex justify-center hidden items-center '>
                                <FiSearch className='  sm:text-2xl text-3xl text-white    ' />

                            </button>
                            {!showinp && (
                                <button onClick={handleinp} className=' sm:bg-[#00badb] h-11 w-14 flex justify-center sm:hidden items-center '>
                                    <FiSearch className='  sm:text-2xl text-3xl text-white    ' />

                                </button>

                            )}

                            {showinp && (
                                <>
                                    <div className="flex items-center gap-3">
                                        <input onChange={handleInputChange} type="text" value={searchText} className=" focus:outline-none pl-2 w-full h-7 " placeholder="Search" />
                                        <button className="text-white" onClick={handleclose}>X</button>
                                    </div>
                                </>
                            )}

                        </div>
                        <div className=' md:flex gap-6 items-center xl:w-[9%] w-[20%] pl-10 xl:pl-0  hidden  '>
                            <FiShoppingCart className=' text-white text-2xl' />
                            <h2 className=' text-white text-[17px] font-medium'> Cart</h2>
                        </div>


                    </div>
                    <div className='bg-white  pl-14 py-4  font-normal text-base '>
                        <ul className=' lg:flex gap-11 hidden' >
                            <Link to='/'>
                                <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Home</li>

                            </Link>
                            <li className="relative group ">
                                <span className=" cursor-pointer py-3  text-[#677279] hover:text-[#00badb] duration-300 ">Categories</span>
                                <ul className="absolute hidden bg-white rounded-md shadow-md mt-2 group-hover:block  space-y-3 w-60 p-6 cursor-pointer">
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer' >Routers</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Computer Peripherals</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Wireless Earbuds (TWS)</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Headphones</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Earphones & Neckbands</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Smart Watches</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Power Banks</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Security Cameras</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Android Tv Box</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Graphic Tablets</li>







                                </ul>
                            </li>
                            <li className="relative group">
                                <span className=" cursor-pointer py-3 text-[#677279] hover:text-[#00badb] duration-300">Gaming</span>
                                <ul className="absolute hidden bg-white rounded-md shadow-md mt-2 group-hover:block  space-y-3 w-48 p-6">
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gamepads</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Cooling Fans</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gaming Case</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gaming Chair</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gaming Combo</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gaming Mouse</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gaming Display </li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gaming Keyboard</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gaming Mousepad</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Gaming Headphones</li>







                                </ul>
                            </li>
                            <li className="relative group">
                                <span className="   text-[#677279] hover:text-[#00badb] duration-300  cursor-pointer py-3">Brands</span>
                                <ul className="absolute hidden bg-white rounded-md shadow-md mt-2 group-hover:block  space-y-3 w-40 p-6">
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>TP LINK</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>TENDA</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>MT-LINK</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>A4TECH</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>BLOODY</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>HYPERX</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>T-DAGGER </li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>REDRAGON</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>RONIN</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>HAVIT</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>LOGITECH</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>SPACE</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>BASEUS</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>ANKER</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>LENOVO</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>XIAOMI</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>DOOMAX</li>
                                    <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>AL-HARAMEEN</li>
                                </ul>
                            </li>
                            <Link to='/blog'>
                                <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Blogs</li>
                            </Link>
                            <Link to='/trackorder'>
                                <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Track Order</li>
                            </Link>
                            <Link to='/aboutus'>
                                <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>About Us</li>
                            </Link>
                            <Link to='/contact'>
                                <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
