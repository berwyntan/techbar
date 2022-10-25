import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/UseAppContext";

const Cart = ({ user }) => {
  const navigate = useNavigate(); // navigate for redirecting from other state

  //rendering our ui
  return (
    <>
      <Header />
      <br />
      <h2 className="text-center">Your Cart</h2>
      <br />
      <Container>
        <div className="basket">
          <div className="basket-labels">
            <ul>
              <li className="item item-heading">Item</li>
              <li className="price">Price</li>
              <li className="quantity">Quantity</li>
              <li className="subtotal">Subtotal</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
