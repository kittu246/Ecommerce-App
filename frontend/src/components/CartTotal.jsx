import React from 'react'
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from './Title';

const CartTotal = () => {
    const {calTotalPrice,deliveryFee,currency} = useContext(ShopContext);

  
   return (
    <div className ='w-full'>
        <div className='text-2xl'>
            <Title text1={"CART"} text2={"TOTAL"}/>

        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {calTotalPrice()}.00</p>

            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {deliveryFee}.00</p>

            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency}{calTotalPrice()===0?0:(calTotalPrice()+deliveryFee)}.00</b>

            </div>

        </div>
      
    </div>
  )
}

export default CartTotal
