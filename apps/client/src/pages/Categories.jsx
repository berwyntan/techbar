import axios from 'axios';
import { useEffect } from 'react';

function Categories() {

  

  const getAllCategory = async() => {
    const response = await axios.get('http://localhost:3000/api/category/')
    console.log(response)
    
  }

  useEffect(() => getAllCategory, []);

  return (
    <>
      <div>Categories</div>
      
    </>
    
  )
}

export default Categories;
