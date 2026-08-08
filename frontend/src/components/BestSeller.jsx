import React,{useState,useEffect} from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestProducts,setBestProducts]=useState([]);

    console.log(products);
    useEffect(()=>{

        const filteredproducts = products.filter((item)=>item.bestseller);
        setBestProducts(filteredproducts.slice(0,5));

},[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1="BEST" text2="SELLER"/>
            <p className='width-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati praesentium nemo ad odit fugiat minima fuga sed earum enim vel dolores, odio laboriosam cum.
            </p>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-3'>
           {bestProducts.map((item)=>(
            <ProductItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price}/>
           ))}
        </div>
        
      
    </div>
  )
}

export default BestSeller
