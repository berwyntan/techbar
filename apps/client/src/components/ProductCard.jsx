import React from "react";
import { useNavigate } from "react-router-dom"; // to get method for redirection between pages

const ProductCard = () => {
  const { addToCart } = useAppContext(); //
  const navigate = useNavigate(); // navigate method for redirection between pages

  // rendering our ui
  return (
    <>
      {/*product card*/}
      <div className="card">
        <div className="card-image">
          {/*product image*/}
          <img />
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
        ></span>

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
