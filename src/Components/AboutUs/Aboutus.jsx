import React from 'react'

export default function Aboutus() {
  return (
    <>
    <div className=' bg-[#f3f5f6] pb-8 '>
     <div className=' sm:px-14 px-4  flex justify-center items-center pb-20  p-14'>
       <div className='  flex flex-col justify-center items-center xl:px-80 sm:px-8  gap-12 '>
         <h2 className=' text-[#1b48ab] text-3xl font-medium'>About Us</h2>
         <p  className=' text-[#677279] text-[17px]  '>Compro System, the next level in e-commerce. From its humble beginnings in 2018, Compro System quickly grew to become one of the Premier E-commerce websites in Pakistan, providing quick and efficient delivery as well as reliable customer service.  We're dedicated to giving you the very best,high quality imported products with a strong focus on customer satisfaction in terms of fast shipping times, dedicated support team, and competitive prices.</p>
         <p  className=' text-[#677279] text-[17px]  '>Since 2005,We have been in the list of some of the top distributors for the biggest brands in the IT industry. As the link between the manufacturers and re-sellers we smooth the path for the successful distribution of intelligent IT solutions from the areas of e-security and e-business. We evaluate and market the latest Surveillance & IT products, which complement one another and can be combined to produce overall solutions.</p>
         <p  className=' text-[#677279] text-[17px]  '>We offer competitive pricing on its unparalleled product selection, with a firm commitment to on-time order fulfillment. We empower customers to make the best purchasing decisions by offering detailed product information. Customer satisfaction is our top priority, achieved by delivering superior service with our ever-present philosophy of putting the customer first.</p>
         <p  className=' text-[#677279] text-[17px] '>We're glad you've found your way to the online store that's known not only for the deep discounts but also for our top-notch customer service. We hope you'll be back often and spread the word to all your friends! Shop with us today and see the COMPRO SYSTEM difference.</p>
         <div className=' pt-12  w-full text-center space-y-5'>
          <h2 className=' text-[#1b48ab] text-3xl font-medium'>Our Store Location</h2>
          <div class="flex justify-center items-center  ">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1715942139353!5m2!1sen!2s" 
    class="w-full max-w-4xl h-96 border-0"
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
         </div>
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
