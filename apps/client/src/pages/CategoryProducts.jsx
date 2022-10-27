import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/UseAppContext";

const CategoryProducts = ({ user }) => {
  let { category } = useParams(); // get category id from url
  const [categoryproducts, setCategoryproducts] = useState([]);

  const { products } = useAppContext(); // get products from state

  useEffect(() => {
    console.log(products);
    // get category products
    const newArray = products.filter(function (el) {
      console.log(el);
      return el.category.category === category;
    });

    console.log(newArray);

    setCategoryproducts(newArray);
  }, [products]);

  //rendering our ui
  return (
    <>
      <Header user={user} />
      <br />
      <h2 className="text-center"> {category} Products</h2>
      <br />
      <Container>
        <div className="productlist">
          {categoryproducts.map((v, i) => {
            return <ProductCard key={i} product={v} />;
          })}
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default CategoryProducts;
