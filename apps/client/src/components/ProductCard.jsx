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
      {/* product card */}
      <div className="card">
        <div className="card-image">
          {/* product image */}
          <img src={product.images[0].url} alt={product.name} />
          <div>
            {/* product name */}
            <span
              onClick={() => gotoproduct(product._id)}
              className="card-title producthead"
              style={{
                position: "absolute",
                top: 200,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {product.name}
            </span>

            {/* add to cart button */}
            <span
              onClick={() => add(product._id, 1)}
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light #1E2639"
              style={{ backgroundColor: "rgb(30, 38, 57)" }}
            >
              <i className="material-icons">+</i>
            </span>
          </div>
        </div>
        <div className="card-content">
          {/* product description */}
          <p className="description">{product.description}</p>
          <div className="dialog mt-2">
            {/* product price */}
            <p>
              <b>Price: $ {product.price}</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
