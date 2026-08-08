import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {id} =useParams();
  const {products,currency,addTocart}= useContext(ShopContext);
  const [selectedProduct,setSelectedProduct] =useState(false);
  const [image,setImage] =useState("");
  const [selectedSize,setSelectedSize] =useState('');

 

  const fetchProductDetails =()=>{
    products.forEach((item)=>{
      if(item._id === id){
        setSelectedProduct(item);
        setImage(item.image[0])

      }
    })

  }

  useEffect(()=>{
    fetchProductDetails()

  },[id])
  
  return  ( selectedProduct ?
    <div className='border-t-2 pt-5 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 flex-col sm:flex-row sm:gap-12'>

        {/* product images */}
        <div className='flex-1 flex flex-col-reverse sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

           {
            selectedProduct.image.map((item,index)=>(
              <img className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' key={index} src={item} alt=""/>
            ))
           }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt=""/>

          </div>

        </div>

        {/* product description */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 '>{selectedProduct.name}</h1>
          <div className='flex items-center mt-2 gap-1'>
            <img className='w-3 '  src={assets.star_icon} alt="" />
            <img className='w-3 ' src={assets.star_icon} alt="" />
            <img className='w-3 ' src={assets.star_icon} alt="" />
            <img className='w-3 ' src={assets.star_icon} alt="" />
            <img className='w-3 ' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{selectedProduct.price}</p>
          <p className='mt-5 text-gray-500 w-4/5'>{selectedProduct.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p className="">Select Size</p>
            <div className="flex gap-3 ">
              {selectedProduct.sizes.map((item,index)=>(
                
                <button onClick={()=>setSelectedSize(item)} className={`bg-gray-100 gap py-2 px-4 border ${selectedSize === item ? 'border-orange-500' : '' }`} key ={index}>{item}</button>
              ))}

            </div>
            <button onClick={()=> addTocart(selectedProduct._id, selectedSize)} className ='w-1/2 bg-black text-sm text-white px-8 py-3 active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-3/4'/>
            <div className ='flex flex-col gap-2 text-sm mt-2 text-gray-500'>
              <p>100% Original Product.</p>
              <p>Cash on Delivery is available on this product.</p>
              <p>Easy Return and Exchange policy within 7 days.</p>
            </div>
          </div>

        </div>
      
       

      </div>
  {/* Description and review section */}
       <div className ='mt-8'>
          <div className ='flex '>
            <b className ='border px-2 py-3 text-sm'>Description</b>
            <p className ='border px-2 py-3 text-sm'>Reviews (122)</p>
          </div>
          <div className ='flex flex-col gap-3 px-6 py-6 border text-sm text-gray-500'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>

          </div>
       </div>

  {/* related products     */}

  <RelatedProducts category={selectedProduct.category} subCategory={selectedProduct.subCategory} />
      
     

      
    </div>
    :  <div className='opacity-0'></div>
  )
}

export default Product
