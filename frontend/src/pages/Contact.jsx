import React from 'react'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div >
      <div className='text-center text-2xl pt-10 border-t'>
         <title text1='CONTACT' text2='US'/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=""/>
      <div className='flex flex-col justify-center items-start gap-6'>
         <p className='font-semibold text-xl text-gray-600'>Our Store</p>
         <p className='text-gray-500'>54709 Willams Station <br/> Suite 350, Washington, USA</p>
         <p className='rext-gray-500'>Tel: (415) 555-0123 <br/> Email: admin@forever.com</p>
         <p className='font-semibold text-gray-600 text-xl'>Careers at forever</p>
         <p className='text-gray-500'>Learn More about team and job openings</p>
        <button className='border-black border text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>
          Explore Jobs
        </button>
      </div>
      </div>

      <NewsLetterBox/>

      
    </div>
  )
}

export default Contact
