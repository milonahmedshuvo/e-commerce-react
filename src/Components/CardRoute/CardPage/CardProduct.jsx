import React, { useState } from "react";
import { FaPlus, FaRegWindowMinimize,FaTrashAlt } from "react-icons/fa";



const CardProduct = ({ product, products, setProducts }) => {
  const { image, price, id } = product;
  const [quantity, setQuantity] = useState(1);
  




  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const total = parseInt(price) * quantity;




   const handleDelete = () => {  
      localStorage.removeItem("addToCard")  
      window.location.reload();
   }



  return (
    <div>
      
       {
        products ? <>
         <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b mt-20 mb-12">
        <div>
          <img className="h-36 w-72" src={image} alt="" />
        </div>

        <div className="flex items-center justify-center ">
          <button onClick={increaseQuantity}> <FaPlus className="mt-2 mr-3"></FaPlus> </button>
          <p> [ {quantity} ]</p>
          <button onClick={decreaseQuantity}> <FaRegWindowMinimize className="ml-3"></FaRegWindowMinimize> </button>
        </div>

        <div className="flex items-center">
          <p className="text-xl">{total}</p>
        </div>

        <div className="flex items-center" onClick={handleDelete} >
          <h1> <FaTrashAlt className="text-2xl hover:text-red-400"></FaTrashAlt> </h1>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button className="bg-blue-500 py-1 text-white w-full md:w-1/3 font-semibold">checkout</button>
      </div>
        
        </> : <p className="text-center mt-20 text-2xl text-blue-600"> No product </p>
       }
      
     
      
    </div>
  );
};

export default CardProduct;
