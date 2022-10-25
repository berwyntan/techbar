import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // to redirect between pages
import { useAppContext } from "../context/UseAppContext"; // getting app context to add product into cart

const Product = ({ user }) => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      {/* Main item container */}
      <main className="productitem">
        <section className="img"> </section>
      </main>
      <Footer />
    </>
  );
};

export default Product;
