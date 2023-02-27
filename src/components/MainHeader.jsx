import React from 'react'
import { HiShoppingCart } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
function MainHeader() {
  return (
    <div className='main-header border-b'>
      <div className="flex container mx-auto py-6 items-center">
        <div className="logo w-1/3 flex items-center">
          <HiShoppingCart className='text-sky-500 text-6xl' />
          <h2 className='font-bold text-2xl px-1 text-gray-700'>مسترکالا</h2>
        </div>
        <div className="search-header w-1/3 relative flex items-center">
          <input type="search" className=' w-full py-3 bg-sky-50  rounded-lg pl-4 pr-10 focus:border-sky-400 focus-visible:outline-none ' placeholder='جستجو....' />
          <button className='absolute right-4 top-4'>
            <BsSearch className='text-gray-500 text-lg' />
          </button>
        </div>
        <div className="user-header w-1/3 flex items-center justify-end">
          <div className="button-box justify-end flex items-center">
            <button className='mx-2 flex text-gray-500 font-bold pl-4 border-l border-sky-500'><FiUser className='mx-1 text-2xl text-sky-500' /> ورود / ثبت نام </button>
            <button className='mx-2 flex text-gray-500 font-bold'><AiOutlineShoppingCart className='mx-1 text-2xl text-sky-500' /> سبد خرید </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader