import React from 'react'

export default function Contact() {
  return (
    <>
    <div className=' bg-[#f3f5f6] pb-8 sm:px-14 px-4  '>
     <div className=' sm:px-14 px-4  flex justify-center items-center  p-14'>
       <div className=' '>
         <h2 className=' text-[#1b48ab] text-3xl font-medium'>Contact us</h2>
       </div>
     </div>
     <div className=' flex flex-col justify-center items-center xl:px-80 sm:px-8  gap-4  pb-10'>
      <div className=' flex md:flex-row flex-col gap-3 w-full justify-center   md:px-9 px-0'>
        <div className=' w-full'>
        <input type="text" placeholder='Your name ' className=' p-3 w-full border-2 border-gray-300 focus:border-[#00badb] focus:outline-none' />
        </div>
        <div className=' w-full'>

        <input type="text" placeholder='Your email' className=' p-3 w-full  border-2 border-gray-300 focus:border-[#00badb] focus:outline-none' />
        </div>
       

      </div>
      <div className=' w-full flex justify-center md:px-9 px-0'>
          <textarea name="" id="" className=' w-full p-5 h-60 border-2 border-gray-300 focus:border-[#00badb] focus:outline-none' placeholder='Your message'></textarea>
        </div>
        <div>
          <button className=' h-12 w-52 rounded-sm  bg-[#00badb] text-white font-bold'>Send message</button>
        </div>
     </div>
    
    </div>
    </>
  )
}
