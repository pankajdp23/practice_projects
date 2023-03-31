import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <h2>
      Page not found. Go back to <Link to="/">Home</Link>.
    </h2>
  );
};

export default PageNotFound;
