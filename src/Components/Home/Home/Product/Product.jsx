import React, { useContext } from 'react'
import { MyContext } from '../../../Context/ContextApp'
import Datails from './Datails'


const Product = () => {
      const {productdatails} = useContext(MyContext)
     const local = localStorage.getItem("product")
     const product = JSON.parse(local)

  return (
    <div className='flex justify-center mt-16'>
        
          {
            product.map((product,i)=> <Datails
            key={i}
            product={product}
            ></Datails>)
          }


    </div>
  )
}

export default Product
