import React from 'react'

export default function Trackorder() {
  return (
   <>
   <div className=' bg-[#f3f5f6] pb-8 '>
    <div className=' sm:px-14 px-4  flex justify-center items-center  p-14'>
      <div className=' '>
        <h2 className=' text-[#1b48ab] text-3xl font-medium'>Track Your Order</h2>
      </div>
    </div>
    <div className=' bg-[#264380] sm:px-14 px-4  py-14  gap-7  flex flex-col justify-center items-center text-center'>
      <h2 className=' text-[22px] text-[#ffff] font-medium'>Subscribe to our newsletter</h2>
      
      <p className= ' text-base text-[#ffff] font-medium '>Subscribe to get notified about product launches, special offers <br></br> and news.</p>
      
      <div className=' flex sm:flex-row flex-col w-full  sm:w-auto  gap-3 '>
                <input type="text" className=' border sm:w-full w-full h-12 placeholder:text-[#677279] p-2' placeholder=' Your email' />
                <button className=' h-12 sm:w-44 w-full rounded-sm  bg-[#00badb] text-white font-bold'>Subscribe</button>
            </div>
            <p className= ' text-base text-[#ffff] font-medium '>100% free, Unsubscribe any time!</p>
    </div>
   </div>
   </>
  )
}
