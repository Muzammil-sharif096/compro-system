import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


export default function Footer() {

    const navigate = useNavigate()
    const card = [
        {
            icon1: <LuBox />,
            head1: 'FREE DELIVERY',
            para1: 'Free for all orders above Rs.1000'
        },
        {
            icon1: <FiPhoneCall />,

            head1: '24/7 CUSTOMER SUPPORT',
            para1: 'Call us at 03164466401'
        },
        {
            icon1: <TbTruckDelivery />,

            head1: 'FAST SHIPPING',
            para1: 'Receive your products within 2-3 working days.'
        },
        {
            icon1: <MdOutlinePayments />,

            head1: 'Secure payments',
            para1: 'Guaranteed Safe and Secure Checkout.'
        },
    ]
    return (
        <>
            <div className='  bg-[#f3f5f6]   sm:px-14 px-4   space-y-12'>
                <div className='     border-b border-gray-300 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 pb-12 pt-8 '>


                    {card.map((ele) => {
                        return (
                            <>


                                <div className=' flex sm:flex-row flex-col  text-center sm:text-start   justify-center  items-center '>
                                    <div className=' text-3xl text-[#1b48ab] flex justify-center'>

                                        {ele.icon1}


                                    </div>
                                    <div className=' px-5'>

                                        <h2 className=' text-[#1b48ab] text-base font-medium'>{ele.head1}</h2>
                                        <p className=' text-[#677279] text-base '>{ele.para1}</p>
                                    </div>
                                </div>

                            </>

                        )
                    })}





                </div>
                <div className=' grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 sm:pb-12 '>
                    <div className='  space-y-4'>
                        <h2 className=' text-[#1b48ab] text-base font-medium' >ABOUT US</h2>
                        <div className=' text-[#677279]  text-sm   font-normal  space-y-2'>
                            <p>Compro System brings you premium top brands</p>
                            <p>from across the world providing latest Tech</p>
                            <p>accessories that fit your lifestyle. We're</p>
                            <p>dedicated to giving you the very best, high quality</p>
                            <p>imported products with a strong focus on</p>
                            <p>customer satisfaction in terms of fast shipping</p>
                            <p>times, dedicated support team, and competitive</p>
                            <p>prices in Pakistan</p>
                        </div>
                    </div>
                    <div className=' space-y-4'>
                        <h2 className=' text-[#1b48ab] text-base font-medium'>QUICK LINKS</h2>
                        <ul className='  flex flex-col  gap-2'>
                            <li onClick={() => navigate(`/allitems/${'AllProducts'}`)} className='  text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>All Products</li>
                            <Link to='/trackorder'>
                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>Track Order</li>
                            </Link>
                            <Link to='/aboutus'>


                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>About US</li>
                            </Link>

                            <Link to='/faq'>
                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>FAQ</li>

                            </Link>
                            <Link to='/refund'>
                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>Refund Policy</li>

                            </Link>
                            <Link to='/privacy'>
                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>Privacy Policy</li>


                            </Link>
                            <Link to='/refund'>

                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>Return Policy</li>
                            </Link>
                            <Link to='/terms'>


                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>Terms of Service</li>
                            </Link>

                            <Link to='/shipping'>

                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>Shipping Policy</li>
                            </Link>

                            <Link to='/contact'>

                                <li className=' text-[#677279] text-base hover:text-[#00badb] duration-300 cursor-pointer '>Contact Us</li>
                            </Link>

                        </ul>
                    </div>
                    <div className='  space-y-4'>
                        <h2 className=' text-[#1b48ab] text-base font-medium'>GET IN TOUCH</h2>
                        <div className=' text-[#677279] text-base  space-y-2'>
                            <p>Subscribe to get notified about product</p>
                            <p>launches, special offers and news.</p>
                        </div>
                        <div className=' space-y-3 flex flex-col pr-14'>
                            <input type="text" className=' border w-full h-14 placeholder:text-[#677279] p-2' placeholder=' Your email' />
                            <button className=' h-12 w-32 rounded-sm  bg-[#00badb] text-white font-bold'>Subscribe</button>
                        </div>
                    </div>
                    <div className='  space-y-5'>
                        <h2 className=' text-[#1b48ab] text-base font-medium'>CONTACT US</h2>
                        <div className=' flex gap-2 items-center'>
                            <IoCall className=' text-red-600  font-bold text-lg ' />
                            <p className=' text-[#677279] text-base '>03164466401</p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <FaHotel className=' text-red-600  font-bold text-lg ' />
                            <p className=' text-[#677279] text-base '>03407535711</p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <MdOutlineMedicalInformation className=' text-black  font-bold text-lg ' />
                            <p className=' text-[#677279] text-base underline '>ujamshaid@gmail.com</p>
                        </div>
                        <div className=' flex gap-2 items-center '>
                            <ImOffice className=' text-black  font-bold text-xl ' />
                            <p className=' text-[#677279] text-base '>Office no. WH54, 6th Floor, Techno City Mall, I.I Chaundigarh Road, Karachi</p>
                        </div>
                        <div>
                            <p className=' text-[#677279] text-base '>Office Timings: "11:00AM - 8:00PM"</p>
                        </div>


                    </div>



                </div>
                <div className=' flex sm:flex-row flex-col  sm:justify-between sm:items-center gap-7 pb-10'>
                    <div>
                        <h2 className=' text-[#677279] text-base '>© Compro System</h2>
                    </div>
                    <div className=' space-y-3'>
                        <h2 className=' text-[#677279] text-base '>Follow Us</h2>
                        <div className=' flex gap-3'>
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



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
