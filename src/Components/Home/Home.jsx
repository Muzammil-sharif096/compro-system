import React from 'react'
import data from '../../Data'
export default function Home() {
  const lenevo = data.filter((ele) => ele.brand === "LENEVO")
  return (
    <div className='bg-neutral-100'>
      <div className='flex justify-between px-16'>
        <p className='font-medium text-lg text-blue-500'>Lenovo Audio Equipment</p>
        <p className='text-cyan-500 text-md'>View all lenovo earbuds </p>
      </div>
      <div className='grid grid-cols-6 px-16 '>
        {
          lenevo.map((ele) => {
            return (
              <div className='border bg-white'>
                <div className='flex w-52 justify-center'>
                  <img src={ele.img} alt="" />
                </div>
                <h1>{ele.brand}</h1>
                <p>{ele.title}</p>
              </div>
            )
          })
        }
      </div>

    </div >
  )
}
