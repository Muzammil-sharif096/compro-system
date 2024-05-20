import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import React, { useState, useEffect } from 'react';

export default function Blogs() {
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [bottomModalClass, setBottomModalClass] = useState('bottom-modal-initial');

  useEffect(() => {
    if (isBottomModalOpen) {
      setTimeout(() => {
        setBottomModalClass('bottom-modal-enter-active');
      }, 10); 
    } else {
      setBottomModalClass('bottom-modal-exit-active');
    }
  }, [isBottomModalOpen]);

  return (
   <>
   <div className=' bg-[#f3f5f6] pt-12 pb-6 sm:px-14 px-4 space-y-8'>
    <div className='  space-y-4 '>
      <div>
        <h2 className=' text-[#1b48ab] text-3xl font-medium'>Guides</h2>
      </div>
      <div className=' flex justify-end   gap-9  text-[#677279] text-base  '>
        <button className=' md:hidden    text-[#677279] text-base'  onClick={() => setIsBottomModalOpen(true)} > All</button>
        {isBottomModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-end">
          <div className={`bg-white w-full fixed bottom-0 left-0 p-6 shadow-lg ${bottomModalClass}`}>
            <div className="flex justify-between items-center  mb-4">
              <h2 className="text-lg text-[#1b48ab] font-semibold">Categories</h2>
              <button 
                className="text-[#1b48ab] text-4xl font-semibold" 
                onClick={() => setIsBottomModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <p className=' text-base text-[#00badb] duration-300 cursor-pointer'>All</p>
              <p className='text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>Best earbuds in pakistan under 5000</p>
              <p className='text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>TP-Link device prices in Pakistan</p>
              <p className='text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>TP-Link router prices in Pakistan</p>
              <p className='text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>True Wireless Stereo</p>
              <p className='text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>TWS Earbuds in pakistan</p>
              <p className='text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>WIFI 6 Routers</p>
            </div>
          </div>
        </div>
      )}
       
      <div className=' md:flex flex-wrap  gap-9  text-[#677279] text-base  hidden '>

        <p className= ' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>All</p>
        <p className= ' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>Best earbuds in pakistan under 5000</p>
        <p className= ' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>TP-Link device prices in Pakistan</p>
        <p className= ' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>TP-Link router prices in Pakistan</p>
        <p className= ' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>True Wireless Stereo</p>
        <p className= ' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>TWS Earbuds in pakistan</p>
        <p className= ' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer'>WIFI 6 Routers</p>
      </div>

      </div>
    </div>
    <div className=' grid grid-cols-4 gap-10 '>
      <div className='  col-span-4 lg:col-span-3 md:col-span-4  gap-6  grid md:grid-cols-2 grid-cols-1 pb-10 lg:flex  md:flow-row lg:flex-col  overflow-hidden'>
        <div className='  group  space-y-3 '>
          <div className=' overflow-hidden'>
        <img src="img/Screenshot 2024-05-17 120743.png" alt="" className=' cursor-pointer  group-hover:scale-110 transition-transform duration-1000' />
        </div>
        <h2 className=' text-[#1b48ab] lg:text-2xl text-xl font-bold group-hover:text-[#00badb] duration-300  cursor-pointer' >Top 7 Bomb Wireless Earbuds to Enhance Your Music with in 2022</h2>
        <div className=' flex gap-4'>
        <p  className= ' text-[#677279] sm:text-sm text-[12px]'>Best earbuds in pakistan under 5000</p>
        <div className=' flex items-center justify-center'>
        <div className=' h-1 w-1 rounded-full bg-[#677279]'></div>
        </div>
        <p  className= ' text-[#677279] sm:text-sm text-[12px]'>Hasan Zahid</p>
        <div className=' flex items-center justify-center'>
        <div className=' h-1 w-1 rounded-full bg-[#677279]'></div>
        </div>
        <p  className= ' text-[#677279] sm:text-sm text-[12px]'>Oct 25, 2021</p>
        </div>
        </div>
        <div className='  lg:pt-10   overflow-hidden'>
        <div className='  group   lg:w-2/4 w-full space-y-3 '>
          <div className=' overflow-hidden'>
        <img src="img/Screenshot 2024-05-17 120838.png" alt="" className=' cursor-pointer  group-hover:scale-110 transition-transform duration-1000' />
        </div>
        <h2 className=' text-[#1b48ab] lg:text-2xl text-xl font-bold group-hover:text-[#00badb] duration-300  cursor-pointer' >What is the Best TP-Link Router With Prices Updated 2022</h2>
        <div className=' flex gap-4'>
        <p  className= ' text-[#677279] sm:text-sm text-[12px]'>TP-Link device prices in Pakistan</p>
        <div className=' flex items-center justify-center'>
        <div className=' h-1 w-1 rounded-full bg-[#677279]'></div>
        </div>
        <p  className= ' text-[#677279] sm:text-sm text-[12px]'>Hasan Zahid</p>
        <div className=' flex items-center justify-center'>
        <div className=' h-1 w-1 rounded-full bg-[#677279]'></div>
        </div>
        <p  className= ' text-[#677279] sm:text-sm text-[12px]'>Oct 07, 2021</p>
        </div>
        </div>
      </div>
      </div>
      <div className='  hidden lg:block'>
      <div className=' space-y-5'>
            <h2  className=' text-[#1b48ab] font-medium text-xl '>Follow Us</h2>
            <div  className=' flex gap-2'>
                <div className=' h-8 w-8 rounded-full bg-gray-400  cursor-pointer hover:bg-blue-700 duration-300 flex justify-center items-center text-white'>
                    <FaFacebookF />
                </div>
                <div className=' h-8 w-8 rounded-full bg-gray-400 cursor-pointer hover:bg-pink-700 duration-300 flex justify-center items-center text-white'>
                    <FaInstagram />
                </div>
                <div className=' h-8 w-8 rounded-full bg-gray-400 cursor-pointer hover:bg-red-600 duration-300 flex justify-center items-center text-white'>
                    <FaYoutube />
                </div>
                <div className=' h-8 w-8 rounded-full bg-gray-400 cursor-pointer hover:bg-blue-500 duration-300 flex justify-center items-center text-white'>
                    <FaLinkedinIn />
                </div>
                <div className=' h-8 w-8 rounded-full bg-gray-400 cursor-pointer hover:bg-red-400 duration-300 flex justify-center items-center text-white'>
                <IoWifi />
                </div>



            </div>
        </div>
      </div>
    



    </div>
   
   </div>
   </>
  )
}
