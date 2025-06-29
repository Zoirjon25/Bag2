import React from 'react'

export default function HomePage() {
  return ( <>
       <div className='w-[100%] h-[585px] bg-[#2F2F2F] flex justify-around items-center py-15 px-10 text-white pt-30 '>
        <div className='ml-17'>
            <p className='text-[#F59B00] font-medium'>Look Stylish Be Stylish.</p>
            <h1 className='text-7xl w-[600px] font-bold gap-10 relative top-3'>
            Look Stylish Be
                <span className='text-red-600 gap-5'>Stylish.</span>

            </h1>
            <p className='w-[385px] font-light py-5'>
            Before starting this business you should have ideas about the market and products to Compete with the Existing Businesses.
                </p>
                <div className='flex gap-20 '>
                <button className='w-[140px] h-[49px] border-1 rounded-lg border-[#F59B00] bg-[#F59B00] font-bold'> Join shop </button>
                <div className='mt-5'>
                <img src="https://i.postimg.cc/zXqZ3dtr/Cta.png" alt="" />
                </div>
                </div>
        </div>
        <div className='mr-20'>
            <img className=' w-[700px] absolute top-30 left-129' src="https://i.postimg.cc/KYGRNr8S/background-image.png" alt="img bitcoin" />
             <img className='relative h-[645px] right-10' src="https://i.postimg.cc/50wNvnhM/image-26.png" alt="" />
        </div>
    </div>
  </>
    
  )
}
