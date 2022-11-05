import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ loading }) => {
  // rendering our ui
  if (loading) {
    return (
      <div className="loadingscreen">
        <h2 className="mt-2" style={{ fontSize: "45px", color: "white" }}>
          Loading....
        </h2>
        <br />
      </div>
    );
  } else {
    return (
      <div className="loadingscreen">
        <h2 className="mt-2" style={{ fontSize: "45px", color: "white" }}>
          Page Not Found
        </h2>
        <br />
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
};

export default NotFound;
