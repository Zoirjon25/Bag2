import React from 'react'

export default function TitlePage() {
  return (
    <div className='w-[100%] h-[800px] flex justify-around items-center  bg-[] text-black  gap-18'>
    <div>
        <img className='' src="https://i.postimg.cc/c4jGcPQG/Image-28.png" alt="img" />
    </div>
    <div className=''>
        <h2 className='text-orange-400 text-2xl font-poppins '>creative bag only for you.</h2>
        <h1 className='text-4xl font-bold w-[500px] pt-2 '>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Eiusmod.</h1> 
        <p className='text-sm w-[450px] font-mono  pt-5 '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className='pt-5'>
        <button className='w-[134px] h-[49px] bg-[#F59B00] border-[#F59B00] rounded-lg mt-3 text-white'>See more</button>
        </div>
    </div>
</div>
  )
}
