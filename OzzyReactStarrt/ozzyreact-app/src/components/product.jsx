import React from "react";

const Product = props => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{props.name}</h1>
      <h1 className="display-3">{props.price}</h1>
      <h1>{props.description}</h1>
      <br />
    </div>
  );
};

export default Product;
