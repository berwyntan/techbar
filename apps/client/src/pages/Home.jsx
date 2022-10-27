import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Container } from "react-bootstrap";
import { useAppContext } from "../context/UseAppContext";

const Home = ({ user }) => {
  const { featuredproducts } = useAppContext(); // getting featured products from app state
  return (
    <>
      <Header user={user} />
      <Slider />
      <br />
      <h2 className="text-center"> Featured Products</h2>
      <Container>
        <div className="productlist">
          {/* rendering featured products */}

          {featuredproducts &&
            featuredproducts.map((v, i) => {
              return <ProductCard key={i} product={v} />;
            })}
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Home;
