import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate is use to navigate between the screens

const CategoryCard = ({ category }) => {
  const navigate = useNavigate(); // navigate method for navigation to other screens

  return (
    <>
      {/* category cart */}
      <div className="card">
        <div className="card-image">
          {/* category image */}
          <img />
          {/* category name */}
          <div className="card-content">
            <h3 className="description text-center"></h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
