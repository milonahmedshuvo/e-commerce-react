import React from 'react'
import { toast } from 'react-hot-toast'

const AddProduct = () => {

    let mergeArray = []

    const handleAddProduct = (event) => {
          event.preventDefault()
          const productName = event.target.productName.value 
          const display = event.target.display.value
          const price = event.target.price.value
          const productLink = event.target.productLink.value

          const addproductData = {
            productName,
            display,
            price,
            productLink
          }
          mergeArray.push(addproductData)
          console.log(mergeArray)
          localStorage.setItem("addProductData", JSON.stringify(mergeArray)) 
          toast.success("Success!")
    }


  return (
    <div>
        <h1 className='text-center text-blue-400 text-2xl font-semibold my-10'>add product</h1>  

        <div className='flex justify-center'>
            <form onSubmit={handleAddProduct}>
            <input type="text" name='productName' placeholder="Product name" className="input input-bordered w-full my-2" />
            <input type="text" name='display' placeholder="display" className="input input-bordered w-full my-2" />
            <input type="text" name='price' placeholder="price" className="input input-bordered w-full my-2" />
            <input type="text" name='productLink' placeholder="product link" className="input input-bordered w-full my-2" />

            <button type="submit" className='bg-blue-500 py-1 text-center w-1/3 my-7 text-white font-semibold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddProduct
