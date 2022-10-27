import axios from "axios";
import { useEffect, useContext } from "react";
import UseAppContext from "../hooks/useAppContext";

function Categories() {
  // const { categoryData, setCategoryData } = useContext(UseAppContext);
  const { categoryData, setCategoryData } = UseAppContext();

  const getAllCategory = async () => {
    const response = await axios.get("http://localhost:3000/api/category/");
    console.log(response);
    setCategoryData(response.data);
  };

  useEffect(() => getAllCategory, []);

  const categoryCards = categoryData.map((category) => {
    return (
      <>
        <h3>{category.category}</h3>
        <img src={category.image} style={{ width: "200px" }} />
      </>
    );
  });

  return (
    <>
      <div>Categories</div>
      <div>{categoryCards}</div>
    </>
  );
}

export default Categories;

// !PROPOSED CODE
/*
import React, { useState } from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import { useAppContext } from '../context/UseAppContext'

import CategoryCard from '../components/CategoryCard'
const Categories = ({ user }) => {
    const { categories } = useAppContext() // getting categories from app state


    // rendering ui
    return (
        <>
            <Header user={user} />
            <br />
            <h2 className='text-center'>All Categories</h2>
            <br />
            <Container>

                <div className="productlist">


                    {categories && categories.map((v, i) => {
                        return (<CategoryCard key={i} category={v} />
                        )
                    })}

                </div>




            </Container>
            <br />
            <Footer />

        </>
    )
}

export default Categories;
*/
