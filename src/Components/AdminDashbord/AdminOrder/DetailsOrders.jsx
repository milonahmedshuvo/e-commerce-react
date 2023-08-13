import React from 'react'

const DetailsOrders = ({order}) => {
    const {address, userName, image, name, totalPrice } = order


  return (
    <div className='grid grid-cols-4 md:grid-cols-4'>


         <div className='flex justify-center items-center'>
            <img className='h-28 w-40' src={image} alt="" />
         </div>


         <div className='flex justify-center items-center'>
            <p>{name}</p>
         </div>


         <div className='flex justify-center items-center'>
             <p>{totalPrice}</p>
         </div>


         <div className='flex justify-center items-center'>
            <p>{userName}</p>
         </div>


    </div>
  )
}

export default DetailsOrders
