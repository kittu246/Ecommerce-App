import React, { useContext,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {
  const {products}=useContext(ShopContext)
  const [showFilter,setShowFilter]= useState(false);

  const handleMobileFilters=()=>{
    setShowFilter(!showFilter);
  }
  return (
    <div className='flex flex-col gap-1 sm:flex-row sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={handleMobileFilters} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter?"rotate-90":""}`} src={assets.dropdown_icon}/>
        </p>
        {/* category filter */}
        <div className= {` border border-gray-300 pl-4 flex flex-col py-3 mt-6 ${showFilter?"":"hidden"} sm:block `} >
          <p className="text-sm font-medium mb-3">CATEGORIES</p>
          <div className='flex flex-col gap-2 text-gray-700 text-sm font-light'>
            <p className='flex gap-2 '>
            <input className='w-3' type="checkbox" value={"Men"} />Men
          </p>
          <p className='flex gap-2 '>
            <input className='w-3' type="checkbox" value={"Women"} />Women
          </p>
          <p className='flex gap-2 '>
            <input className='w-3' type="checkbox" value={"Child"} />Child
          </p>
          </div>
          

        </div>
        {/* subcategory filter */}
        <div className= {` border border-gray-300 pl-4 flex flex-col py-3 mt-6 ${showFilter?"":"hidden"} sm:block `} >
          <p className="text-sm font-medium mb-3">TYPE</p>
          <div className='flex flex-col gap-2 text-gray-700 text-sm font-light'>
            <p className='flex gap-2 '>
            <input className='w-3' type="checkbox" value={"Topwear"} />Topwear
          </p>
          <p className='flex gap-2 '>
            <input className='w-3' type="checkbox" value={"Bottomwear"} />Bottomwear
          </p>
          <p className='flex gap-2 '>
            <input className='w-3' type="checkbox" value={"Winterwear"} />Winterwear
          </p>
          </div>
          

        </div>

      </div>
      
    </div>
  )
}

export default Collection
