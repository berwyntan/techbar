import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/UseAppContext";

const CategoryProducts = ({ user }) => {
  //rendering our ui
  return (
    <>
      <Header />
      <br />
      <h2 className="text-center"></h2>
      <br />
      <Container>
        <div className="productlist"></div>
      </Container>
      <Footer />
    </>
  );
};

export default CategoryProducts;
