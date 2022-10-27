// import axios from "axios";
// import { useEffect, useContext } from "react";
// import { useAppContext } from "../context/UseAppContext";

// function Categories() {
//   // const { categories, setCategories } = useContext(UseAppContext);
//   const { categories, setCategories } = useAppContext();

//   const getAllCategory = async () => {
//     const response = await axios.get("http://localhost:3000/api/category/");
//     console.log(response);
//     setCategories(response.data);
//   };

//   useEffect(() => getAllCategory, []);

//   const categoryCards = categories.map((category) => {
//     return (
//       <>
//         <h3>{category.category}</h3>
//         <img src={category.image} style={{ width: "200px" }} />
//       </>
//     );
//   });

//   return (
//     <>
//       <div>Categories</div>
//       <div>{categoryCards}</div>
//     </>
//   );
// }

// export default Categories;

// !PROPOSED CODE

import { useState } from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import { useAppContext } from '../context/UseAppContext'

import CategoryCard from '../components/CategoryCard'
const Categories = ({ user }) => {
    const { categories, setCategories } = useAppContext() // getting categories from app state

    const getAllCategory = async () => {
    const response = await axios.get("http://localhost:3000/api/category/");
    console.log(response);
    setCategories(response.data);
    };

    useEffect(() => getAllCategory, []);

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

