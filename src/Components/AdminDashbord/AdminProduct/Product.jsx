import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, image, price, display, id } = product;

  return (
    <div className="p-4 ">
      <p className="text-2xl mb-4">{name}</p>

      <Link to="/product">
        <div onClick={() => singleProduct(id)}>
          <img src={image} alt="" />
        </div>
      </Link>

      <div className="flex justify-between my-6 ">
        <p className="text-lg">{display}</p>
        <p className="font-medium text-lg">${price}</p>
      </div>

      
    </div>
  );
};

export default Product;
