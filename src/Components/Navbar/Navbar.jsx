import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
  const [centerModalClass, setCenterModalClass] = useState('center-modal-initial');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalClass, setModalClass] = useState('modal-initial');
  const [isRightModalOpen, setIsRightModalOpen] = useState(false);
  const [rightModalClass, setRightModalClass] = useState('right-modal-initial');

  useEffect(() => {
    if (isRightModalOpen) {
      setTimeout(() => {
        setRightModalClass('right-modal-enter-active');
      }, 10);
      document.body.style.overflow = 'hidden';
    } else {
      setRightModalClass('right-modal-exit-active');
      document.body.style.overflow = 'auto';
    }
  }, [isRightModalOpen]);


  const handleBackClick = () => {
    setRightModalClass('right-modal-exit-active');
    setTimeout(() => {
      setIsRightModalOpen(false);
    }, 600);
  };

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setModalClass('modal-enter-active');
      }, 600);
    } else {
      setModalClass('modal-exit-active');
    }
  }, [isModalOpen]);


  useEffect(() => {
    if (isCenterModalOpen) {
      setTimeout(() => {
        setCenterModalClass('center-modal-enter-active');
      }, 10);
      document.body.style.overflow = 'hidden';
    } else {
      setCenterModalClass('center-modal-exit-active');
      document.body.style.overflow = 'auto';
    }
  }, [isCenterModalOpen]);


  const navigate = useNavigate()


  return (
    <>
      <div className=' '>
        <div>
          <div className=' bg-[#00badb] flex justify-center items-center p-2.5'>
            <p className='  sm:text-[15px] text-sm  font-bold text-white'>Free shipping on all orders above Rs.1000</p>
          </div>
          <div className=' bg-[#1b48ab]  flex  md:justify-between  py-3 pb-5 pt-5  gap-4 md:gap-0  px-3 sm:px-0 '>
            <div className='  lg:w-[20%] sm:w-[35%] w-[60%] flex gap-1 justify-center sm:pl-4 pl-6'>
              <button onClick={() => setIsCenterModalOpen(!isCenterModalOpen)} className='  lg:hidden xl:hidden h-12 text-3xl sm:flex flex  sm:justify-center sm:items-center  md:flex justify-center items-center w-14  text-white'>
                {isCenterModalOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </button>
              <img src="/img/COMPRO_SYSTEM_1_a5d24fe7-ecb5-4662-954f-f1ea3897469e_200x.png" alt="" />
              {isCenterModalOpen && (
                <div className={`fixed top-28 left-0 right-0 bottom-0 bg-white p-6 shadow-lg overflow-y-auto ${centerModalClass}`}>
                  <ul className="text-[#677279] text-lg space-y-4">
                    <li>Home</li>
                    <div className=' flex items-center justify-between ' onClick={() => setIsRightModalOpen(true)}>
                      <li>Categories</li>
                      <button className=" text-[#677279] text-xl  font-normal"  >
                        <FaAngleRight />
                      </button>
                    </div>
                    {isRightModalOpen && (
                      <div className={`fixed top-0 bottom-0 left-0 right-0  bg-white shadow-lg overflow-y-auto ${rightModalClass}`}>
                        <div className=' border-b-2 border-gray-200  pb-4 pt-2 pl-4 '>
                          <button onClick={handleBackClick} className=" text-[#677279] text-lg flex items-center gap-2"   ><FaAngleLeft /> Back </button>
                        </div>
                        <ul className="     space-y-3 w-60 pl-5   pt-5 cursor-pointer">
                          <li className='  text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer' >Routers</li>
                          <li className='  text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Computer Peripherals</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Wireless Earbuds (TWS)</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Headphones</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Earphones & Neckbands</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Smart Watches</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Power Banks</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Security Cameras</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Android Tv Box</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Graphic Tablets</li>
                        </ul>
                      </div>
                    )}
                    <div className=' flex items-center justify-between'>
                      <li onClick={() => setIsRightModalOpen(true)}>Gaming</li>
                      <button onClick={() => setIsRightModalOpen(true)} className=" text-[#677279] text-xl  font-normal"  >
                        <FaAngleRight />
                      </button>
                    </div>
                    <div className=' flex items-center justify-between'>
                      <li onClick={() => setIsRightModalOpen(true)}>Brands</li>
                      <button onClick={() => setIsRightModalOpen(true)} className=" text-[#677279] text-xl  font-normal"  >
                        <FaAngleRight />
                      </button>
                    </div>
                    {isRightModalOpen && (
                      <div className={`fixed top-0 bottom-0 left-0 right-0  bg-white shadow-lg overflow-y-auto ${rightModalClass}`}>
                        <div className=' border-b-2 border-gray-200  pb-4 pt-2 pl-4 '>

                          <button onClick={handleBackClick} className=" text-[#677279] text-lg flex items-center gap-2"   ><FaAngleLeft /> Back </button>
                        </div>
                        <ul className="  space-y-3 w-60 pl-5   pt-5 cursor-pointer">
                          <li onClick={() => { navigate(`/allitems/${'Routers'}`) }} className='  text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer' >Routers</li>
                          <li className='  text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Computer Peripherals</li>
                          <li onClick={() => { navigate(`/allitems/${'WireLessAirBurds'}`) }} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Wireless Earbuds (TWS)</li>
                          <li onClick={() => { navigate(`/allitems/${'HeadPhone'}`) }} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Headphones</li>
                          <li onClick={() => { navigate(`/allitems/${'EarPhone'}`) }} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Earphones & Neckbands</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Smart Watches</li>
                          <li onClick={() => { navigate(`/allitems/${'PowerBank'}`) }} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Power Banks</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Security Cameras</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Android Tv Box</li>
                          <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Graphic Tablets</li>
                        </ul>
                      </div>
                    )}
                    <li>Blogs</li>
                    <li>Track Order</li>
                    <li>About Us</li>
                    <li>Contact</li>
                  </ul>
                  <div className="space-y-3 mt-6">
                    <h2 className='text-[#677279] text-base'>Follow Us</h2>
                    <div className='flex gap-3'>
                      <div className='h-8 w-8 rounded-full bg-gray-400 cursor-pointer hover:bg-blue-700 duration-300 flex justify-center items-center text-white'>
                        <FaFacebookF />
                      </div>
                      <div className='h-8 w-8 rounded-full bg-gray-400 cursor-pointer hover:bg-pink-700 duration-300 flex justify-center items-center text-white'>
                        <FaInstagram />
                      </div>
                      <div className='h-8 w-8 rounded-full bg-gray-400 cursor-pointer hover:bg-red-600 duration-300 flex justify-center items-center text-white'>
                        <FaYoutube />
                      </div>
                      <div className='h-8 w-8 rounded-full bg-gray-400 cursor-pointer hover:bg-blue-500 duration-300 flex justify-center items-center text-white'>
                        <FaLinkedinIn />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='    lg:w-[70%] sm:w-[60%] w-[40%]     flex  justify-end sm:justify-start  items-center px-2 sm:px-0 '>
              <input onClick={() => setIsModalOpen(true)} type="text" name="" id="" placeholder='search...' className=' h-11  rounded-l-sm w-[91%]  outline-none pl-3 placeholder:text-[#677279] hidden sm:block' />
              <button onClick={() => setIsModalOpen(true)} className=' sm:bg-[#00badb] h-11 w-14 sm:flex justify-center hidden items-center '>
                <FiSearch className='  sm:text-2xl text-3xl text-white    ' />
              </button>
              <button onClick={() => setIsModalOpen(true)} className=' sm:bg-[#00badb] h-11 w-14 flex justify-center sm:hidden items-center '>
                <FiSearch className='  sm:text-2xl text-2xl text-white    ' />
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-start">
                  <div className={`bg-white w-full fixed top-0 left-0 p-2 shadow-lg transition-transform duration-300 ${modalClass}`}>
                    <div className="flex justify-center">
                      <div className="flex items-center w-full  lg:max-w-3xl  sm:px-24 px-8 lg:px-0">
                        <input type="text" className="flex-grow p-2 border-2 border-gray-300 rounded placeholder:text-black" placeholder="What are you looking for?" />
                        <button
                          className="ml-4 text-gray-400 text-2xl flex justify-center items-center h-8 w-8 hover:bg-gray-700 hover:text-white  duration-500  rounded-full"
                          onClick={() => setIsModalOpen(false)}
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className=' md:flex gap-6 items-center xl:w-[9%] w-[20%] pl-10 xl:pl-0  hidden  '>
              <FiShoppingCart className=' text-white text-2xl' />
              <h2 className=' text-white text-[17px] font-medium'> Cart</h2>
            </div>


          </div>
          <div className='bg-white  pl-14 py-2  font-normal text-base '>
            <ul className=' lg:flex gap-11 hidden' >
              <Link to='/'>
                <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer py-2'>Home</li>

              </Link>
              <li className="relative group py-2 ">
                <span className=" cursor-pointer   text-[#677279] hover:text-[#00badb] duration-300 flex items-center gap-2  ">Categories <FaAngleDown /></span>
                <ul className="absolute hidden bg-white rounded-md shadow-md mt-2 group-hover:block  space-y-3 w-60 p-6 cursor-pointer">
                  <li onClick={() => navigate(`/allitems/${'Routers'}`)} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer' >Routers</li>
                  <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Computer Peripherals</li>
                  <li onClick={() => navigate(`/allitems/${'WireLessAirBurds'}`)} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Wireless Earbuds (TWS)</li>
                  <li onClick={() => navigate(`/allitems/${`HeadPhone`}`)} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Headphones</li>
                  <li onClick={() => navigate(`/allitems/${'EarPhone'}`)} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Earphones & Neckbands</li>
                  <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Smart Watches</li>
                  <li onClick={() => navigate(`/allitems/${'PowerBank'}`)} className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Power Banks</li>
                  <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Security Cameras</li>
                  <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Android Tv Box</li>
                  <li className=' text-[#677279] hover:text-[#00badb] duration-300 cursor-pointer'>Graphic Tablets</li>
                </ul>
              </li>
              <li className="relative group py-2">
                <span className=" cursor-pointer  text-[#677279] hover:text-[#00badb] duration-300 flex items-center gap-2">Gaming <FaAngleDown /></span>
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
              <li className="relative group py-2">
                <span className="   text-[#677279] hover:text-[#00badb] duration-300  cursor-pointer flex items-center gap-2">Brands <FaAngleDown /></span>
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
                <li className=' text-[#677279] hover:text-[#00badb] py-2 duration-300 cursor-pointer'>Blogs</li>
              </Link>
              <Link to='/trackorder'>
                <li className=' text-[#677279] hover:text-[#00badb] py-2 duration-300 cursor-pointer'>Track Order</li>
              </Link>
              <Link to='/aboutus'>
                <li className=' text-[#677279] hover:text-[#00badb] py-2 duration-300 cursor-pointer'>About Us</li>
              </Link>
              <Link to='/contact'>
                <li className=' text-[#677279] hover:text-[#00badb] py-2 duration-300 cursor-pointer'>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
