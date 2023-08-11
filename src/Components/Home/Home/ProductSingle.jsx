import React from 'react'

const ProductSingle = ({product,singleProduct}) => {
     const {name, image, price, display,id} = product;

  return (
    <div className='p-4 '>
        <p className='text-2xl mb-2'>{name}</p>
         <div onClick={()=>  singleProduct(id)}>
            <img src={image} alt="" />
         </div>

         <div className='flex justify-between '>       
           <p className='text-lg'>{display}</p>
           <p className='font-medium text-lg'>{price}</p>
         </div>

         <button type="button" className='bg-blue-500 rounded text-center mt-7 text-white w-full py-1 font-semibold '>Add To Card</button>
    </div>
  )
}

export default ProductSingle
