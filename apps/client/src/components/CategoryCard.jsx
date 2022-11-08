import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate is use to navigate between the screens

const CategoryCard = ({ category }) => {
  const navigate = useNavigate(); // navigate method for navigation to other screens

  // function to go to navigation page
  const gotocategory = async (category) => {
    // navigate ro category product page with category id
    navigate(`/categoryproducts/${category}`);
  };

  // rendering our ui
  return (
    <>
      {/* category card */}
      <div className="card">
        <div className="card-image">
          {/* category image */}
          <img
            src={category.image}
            alt={category.category}
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* category name */}
        <div className="card-content" style={{ marginTop: 0 }}>
          <h3
            className="description text-center"
            style={{ cursor: "pointer" }}
            onClick={() => gotocategory(category.category)}
          >
            {category.category}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
