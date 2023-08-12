import React, { useState } from 'react'
import CardProduct from './CardProduct'

const CardPage = () => {
    const local =  localStorage.getItem("addToCard")
    const addToCardProducts = JSON.parse(local)
    console.log(addToCardProducts)


    const [products, setProducts] = useState(addToCardProducts);
   



  




 



  return (
    <div>
        {/* <h1>Card page {addToCardProducts?.length}  </h1>   */}


           {
              products?.map((product,ind) => <CardProduct
              key={ind}
              product={product}
              products={products}
              setProducts={setProducts}
              ></CardProduct>)
           }
    </div>
  )
}


export default CardPage
