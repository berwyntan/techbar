import React from "react";
import Slider from '../components/Slider'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from '../components/ProductCard'
import { Container } from "react-bootstrap";
const Home = ({}) => {

  return (
    <>
    <Header/>
    <Slider/>
    <br />
    <h2 className="text-center"> Featured Products</h2>
    <Container>
    <div className="productlist"> // to render Featured products
   
    </div>
    </Container>
    <br />
    <Footer />

    </>
  );
};

export default Home;
