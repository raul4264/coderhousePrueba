import React from "react";

const Item = (product) => {
  return (
    <div>
      <p>Id: {product.product.id}</p>
      <p>Name: {product.product.name}</p>
      <br />
    </div>
  );
};

export default Item;
