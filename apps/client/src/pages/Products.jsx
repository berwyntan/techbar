import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard"; // product card
import { Container } from "react-bootstrap"; // conteiner for ui
import { useAppContext } from "../context/UseAppContext"; // app contexxt for getting products

const Products = ({ user }) => {
  const { products } = useAppContext(); // getting products

  //rendering our ui
  return (
    <>
      <Header user={user} />
      <br />
      <h2 className="text-center">All Products</h2>
      <br />
      <Container>
        <div className="productlist">
          {/* rendering produt card for all products */}

          {products.map((v, i) => {
            return <ProductCard key={i} product={v} />;
          })}
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Products;
