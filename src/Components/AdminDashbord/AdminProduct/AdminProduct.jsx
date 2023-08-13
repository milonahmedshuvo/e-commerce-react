import React, { useState } from 'react'
import Product from './Product'

const AdminProduct = () => {
       const products = localStorage.getItem("adminproduct")
       const adminProducts = JSON.parse(products)



  return (
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 mb-20'>
      

        {
          adminProducts.map((product, ind) => <Product
          key={ind}
          product={product}
          ></Product> )
        }

    </div>
  )
}

export default AdminProduct
