import Link from 'next/link'
import React from 'react'

export default function HeaderPage() {
  return ( <>
       <div className='w-[100%] h-[90px] flex justify-between items-center px-10 py-5 bg-[#2F2F2F] text-white '>
     <div className='flex  ml-17 ' >
        <h1 className='text-3xl font-serif font-bold text-red-600'>Bag</h1>
     </div>
     <div className='flex justify-between items-center gap-10 text-[#949494] mr-12 '>
        <Link className='text-white' href={'/'}>Home</Link>
        <Link className='hover:text-[#F59B00]' href={'/'}>Feature</Link>
        <Link className='hover:text-[#F59B00]' href={'/'}>About</Link>
        <Link className='hover:text-[#F59B00]' href={'/'}>Product</Link>
     <div>
        <button className='w-[117px] h-[50px] border-1 rounded-sm border-[#F59B00] bg-[#F59B00] font-sans text-white '>Shop now</button>
     </div>
     </div>
    </div>
  
  </>
    
  )
}
