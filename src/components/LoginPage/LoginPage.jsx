import React from 'react'
import { PiRectangle } from "react-icons/pi";

export default function LoginPage() {
  return ( <>
    <div className='w-[100%] flex justify-center items-center pt-56'>
         <div className=''>
          <img className='relative' src="https://i.postimg.cc/1Xm9VdLV/image-37.png" alt="" />
          <img  className='absolute top-842 left-16' src="https://i.postimg.cc/Z5BJNpDH/background.png" alt="" /> 
        </div>
          <div className='w-[600px] h-[550px] bg-[#2F2F2FF2]  flex flex-col justify-center pl-10 pb-20'> 
              <div className='flex justify-start items-start'>
                <h1 className='w-[390px] text-3xl font-bold text-white p'>Lorem ipsum dolor sit amet  Adipiscing elit.</h1>
              </div>
                <div className='flex justify-start items-start pt-15 gap-7 '>
                  <input className='w-[232px] h-[52px]  border-1 border-[#FFFFFF] rounded-lg pl-7 text-[#FFFFFF]' type="text"placeholder='Name' />
                  <input className='w-[232px] h-[52px]  border-1 border-[#FFFFFF] rounded-lg pl-7 text-[#FFFFFF]' type="email"placeholder='Email' />
                </div>
                <div className='pt-7'>
                <input className='w-[494px] h-[52px]  border-1 border-[#FFFFFF] rounded-lg pl-7 text-[#FFFFFF]' type="text"placeholder='Address' />
                </div>
                <div className='flex justify-start items-start pt-15 gap-3'>
                <PiRectangle className='text-[#FFFFFF] text-2xl mt-3 ' />
                  <p className='text-[#FFFFFF] mt-3'>Lorem ipsum dolor sit amet.</p> 
                  <div className='ml-15'>
                    <button className='w-[133px] h-[49px] border-1 bg-[#F59B00] border-[#F59B00] rounded-lg gap-10'>Join now</button>
                  </div>
                
                </div>
          </div>

    </div>
  </>

  )
}
