import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="text-center">
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div className='w-full '>
                <img src={assets.logo} alt="logo" className='w-32 mb-5'/>
                <p className= "text-gray-600 text-left w-full md:w-2/3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque necessitatibus repudiandae tenetur delectus quibusdam dolorem.</p>
            </div>
            <div className='text-left'>
                <p className='text-xl  font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div className='text-left'>
                <p className='text-xl  font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>+1-212-456-6785</li>
                    <li>contact@fpreveryou.com</li>
                   

                </ul>


            </div>

            
        </div>
        <div>
            <hr/>
            <p className='text-sm py-5 text-center '>Copyright2024@forever.com - All Rights Reserved</p>
            </div>

      
    </div>
  )
}

export default Footer
