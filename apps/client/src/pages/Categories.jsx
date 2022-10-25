import axios from 'axios';
import { useEffect, useContext } from 'react';
import UseAppContext from '../hooks/useAppContext'

function Categories() {
  
  // const { categoryData, setCategoryData } = useContext(UseAppContext);
  const { categoryData, setCategoryData } = UseAppContext();

  const getAllCategory = async() => {
    const response = await axios.get('http://localhost:3000/api/category/')
    console.log(response);
    setCategoryData(response.data);
  }

  useEffect(() => getAllCategory, []);

  const categoryCards = categoryData.map(category => {
    return(
      <>
        <h3>{category.category}</h3>
        <img src={category.image} style={{width: "200px"}}/>
      </>
    )
  })

  return (
    <>
      <div>Categories</div>
      <div>{categoryCards}</div>
    </>
    
  )
}

export default Categories;
