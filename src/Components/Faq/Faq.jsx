import React from 'react'

export default function Faq() {
   return (
      <>
         <div className=' bg-[#f3f5f6] pb-8 '>
            <div className=' sm:px-14 px-4  flex justify-center items-center pb-20  p-14'>
               <div className='  flex flex-col   xl:px-80 sm:px-8  gap-16 '>
                  <h2 className=' text-[#1b48ab] text-3xl font-medium text-center'>FAQs</h2>
                  <div className=' space-y-5'>
                     <h2 className=' text-[22px] font-medium text-[#1b48ab] '>How to order?</h2>
                     <p className=' text-[#677279] text-[17px]  '>To place your order first add your desired product into your cart, Then proceed checkout, Fill your information and select place order. It that simple!</p>
                  </div>
                  <div className=' space-y-5 flex flex-col items-start border'>
                     <h2 className=' text-[22px] font-medium text-[#1b48ab] '>What is the standard delivery time?</h2>
                     <p className=' text-[#677279] text-[17px]  '>Delivery would take upto 2-3 working days.</p>
                  </div>
                  <div className=' space-y-5'>
                     <h2 className=' text-[22px] font-medium text-[#1b48ab] '>How can I cancel my order?</h2>
                     <p className=' text-[#677279] text-[17px]  '>Cancellation requests are accepted within 1 working days after order generation. You can cancel your order by following methods:</p>
                     <div className=' flex items-center gap-2'>
                        <div className=' h-1 w-1 font-bold rounded-full bg-[#677279]'></div>
                        <p className=' text-[#677279] text-[17px]  '>  Email your request at <span className=' text-[#00badb] cursor-pointer hover:text-gray-500 duration-300 underline'>info.comprosystem@gmail.com</span> </p>

                     </div>
                     <div className=' flex items-center gap-2'>
                        <div className=' h-1 w-1 font-bold rounded-full bg-[#677279]'></div>
                        <p className=' text-[#677279] text-[17px]  '>  Message your request to our social media pages: <span className=' text-[#00badb] cursor-pointer hover:text-gray-500 duration-300 underline'>Facebook, Instagram</span> </p>

                     </div>
                     <div className=' flex items-center gap-2'>
                        <div className=' h-1 w-1 font-bold rounded-full bg-[#677279]'></div>
                        <p className=' text-[#677279] text-[17px]  '> Call us at our support helpline 021-3227700-1 </p>

                     </div>
                  </div>

                  <div className=' space-y-5 flex flex-col items-start '>
                     <h2 className=' text-[22px] font-medium text-[#1b48ab] '>What is your helpline number?</h2>
                     <p className=' text-[#677279] text-[17px]  '>You can call us at 021-32277000-1 should you face any issues. We believe in excellent customer service and are always available to help you out.</p>
                  </div>
                  <div className=' space-y-5 flex flex-col items-start '>
                     <h2 className=' text-[22px] font-medium text-[#1b48ab] '>Are there any delivery charges? How much?</h2>
                     <p className=' text-[#677279] text-[17px]  '>We have delivery charges for orders below Rs.1000. The charges vary on the weight of the product</p>
                  </div>
                  <div className=' space-y-5 flex flex-col items-start '>
                     <h2 className=' text-[22px] font-medium text-[#1b48ab] '>What if my question isn't listed here in FAQs?</h2>
                     <p className=' text-[#677279] text-[17px]  '>Please E-mail us your query at  <span className=' text-[#00badb] hover:text-gray-500 duration-300 underline cursor-pointer'>info.comprosystem@gmail.com</span>  or call us at 021-32277000-1 or Whatsapp us at <span className=' text-[#00badb] hover:text-gray-500 duration-300 underline cursor-pointer'>03164466401</span></p>
                  </div>



               </div>
            </div>

            <div className=' bg-[#264380] sm:px-14 px-4  py-14  gap-7  flex flex-col justify-center items-center text-center'>
               <h2 className=' text-[22px] text-[#ffff] font-medium'>Subscribe to our newsletter</h2>

               <p className=' text-base text-[#ffff] font-medium '>Subscribe to get notified about product launches, special offers <br></br> and news.</p>

               <div className=' flex sm:flex-row flex-col w-full  sm:w-auto  gap-3 '>
                  <input type="text" className=' border sm:w-full w-full h-12 placeholder:text-[#677279] p-2' placeholder=' Your email' />
                  <button className=' h-12 sm:w-44 w-full rounded-sm  bg-[#00badb] text-white font-bold'>Subscribe</button>
               </div>
               <p className=' text-base text-[#ffff] font-medium '>100% free, Unsubscribe any time!</p>
            </div>
         </div>
      </>
   )
}
