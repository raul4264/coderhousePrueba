import React from "react";
import Item from "../Item/Item";

const ItemList = (products) => {
  return (
    <div>
      {products &&
        products.products &&
        products.products.map((product) => {
          return <Item product={product} />;
        })}
    </div>
  );
};

export default ItemList;
