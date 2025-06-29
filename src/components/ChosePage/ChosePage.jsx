import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function ChosePage() {
  return ( <>
        <div className='w-[100%] flex flex-col justify-center items-center pt-72'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl text-black font-semibold'>Our available product</h1>
                <p className='w-[540px] text-xl font-light text-gray-500 pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                <p className='text-xl font-light text-gray-500'>eiusmod tempor incididunt ut labore et dolore. </p>
            </div>
            <div className='w-[100%] flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center gap-10 pt-10'>
                    <div className='w-[260px] h-[270px] border-1 bg-[#FFE1E8] border-[#FDEEF1] rounded-xl'>
                    <img className='pt-3.5' src="https://i.postimg.cc/Ssf59vG8/image-29.png" alt="img-bag-1" />
                    </div>
                    {/*next-bag-2*/}
                    <div className='w-[260px] h-[270px] border-1 bg-[#FFE1E8] border-[#FDEEF1] rounded-xl'>
                    <img className='pt-3.5' src="https://i.postimg.cc/D0FSj8sH/image-30.png" alt="img-bag-1" />
                    </div>
                    {/*next-bag-3*/}
                    <div className='w-[260px] h-[270px] border-1 bg-[#FFE1E8] border-[#FDEEF1] rounded-xl'>
                    <img className='pt-3.5' src="https://i.postimg.cc/0jcyVZ9K/image-31.png" alt="img-bag-1" />
                    </div>
                    {/*next-bag-4*/}
                    <div className='w-[260px] h-[270px] border-1 bg-[#FFE1E8] border-[#FDEEF1] rounded-xl'>
                    <img className='pt-3.5' src="https://i.postimg.cc/KYBc6mZ2/image-32.png" alt="img-bag-1" />
                    </div>
                 
                </div>
                <div className='flex justify-center items-center gap-10 pt-25'>
                <div className='w-[260px] h-[270px] border-1 bg-[#ECF1FF] border-[#ECF1FF] rounded-xl'>
                    <img className='pt-3.5' src="https://i.postimg.cc/RVWmrvRD/image-33.png" alt="img-bag-1" />
                    </div>
                    {/*next-bag-2-1*/}
                    <div className='w-[260px] h-[270px] border-1 bg-[#FADADE] border-[#FADADE] rounded-xl'>
                    <img className='pt-3.5' src="https://i.postimg.cc/qRvY8GD5/image-34.png" alt="img-bag-1" />
                    </div>
                    {/*next-bag-2-2*/}
                    <div className='w-[260px] h-[270px] border-1 bg-[#D9E6FE] border-[#D9E6FE] rounded-xl'>
                    <img className='pt-3.5' src="https://i.postimg.cc/7Pcc203K/image-35.png" alt="img-bag-1" />
                    </div>
                    {/*next-bag-2-3*/}
                    <div className='w-[260px] h-[270px] border-1 bg-[#EBF4BF] border-[#EBF4BF] rounded-xl'>
                    <img className='pt-3.5' src="https://i.postimg.cc/s2wHDhf9/image-36.png" alt="img-bag-1" />
                    </div>
                 
                  
                </div>
            </div>
            <div className='pt-28'>
                <button className='w-[170px] h-[49px] border-1 border-[#f59b00] text-[#f59b00] rounded-lg'>
                    <div className='w-[100%] flex items-center justify-center gap-4'>
                    See more
                <FaArrowRightLong  className='text-4xl text-[#f59b00] mt-1' />
                    </div>
         </button>
                
            </div>
        </div>
  </>

    
  )
}
