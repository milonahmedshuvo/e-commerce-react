import React, { useContext, useState } from "react";
import { FaPlus, FaRegWindowMinimize,FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context/ContextApp";



const CardProduct = ({ product, products, setProducts }) => {
            const {setTotalPrice,setProductQuantity} = useContext(MyContext)     
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
  setTotalPrice(total)
  setProductQuantity(quantity)


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



      <Link to="/checkout" >     
      <div className="w-full flex justify-end">
        <button className="bg-blue-500 py-1 text-white w-full md:w-1/3 font-semibold">Checkout</button>
      </div>
      </Link>
        
        </> : <p className="text-center mt-20 text-2xl text-blue-600"> No product </p>
       }
      
     
      
    </div>
  );
};

export default CardProduct;
