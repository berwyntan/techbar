import React from "react";
import { useNavigate } from "react-router-dom"; // to get method for redirection between pages
import { useAppContext } from "../context/UseAppContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useAppContext(); //
  const navigate = useNavigate(); // navigate method for redirection between pages

  //! to add product into cart
  const add = async (id, quantity) => {
    console.log(id);
    await addToCart(id, quantity);
  };

  //! redirect to product page
  const gotoproduct = (id) => {
    // navigate to product page with product id
    navigate(`/product/${id}`);
  };

  //! rendering our ui
  return (
    <>
      {/*product card*/}
      <div className="card">
        <div className="card-image">
          {/*product image*/}
          <img src={product.images[0]}/>
        </div>
        {/*product name*/}
        <span
          className="card-title producthead"
          style={{
            position: "absolute",
            top: 200,
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >{product.name}</span>

        {/*add to card button */}
        <span></span>
      </div>

      <div className="card-content">
        {/*p[roduct description */}
        <p className="description">{product.description}</p>
      </div>

      <div>
        {/* product price */}
        <p>
          <b>Price: $ {product.price}</b>
        </p>
      </div>
    </>
  );
};

export default ProductCard;
