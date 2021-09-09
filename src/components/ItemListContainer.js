import React from "react";
import Contacto from "./Contacto";
import ItemDetail from "./ItemDetail";

export default function ItemListContainer(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Productos</h2>

      <div className="d-flex flex-column">
        {products.map((product) => (
          <ItemDetail
            key={product.id}
            product={product}
            onAdd={onAdd}
          ></ItemDetail>
        ))}
      </div>
      {/* 
      <div className="d-flex flex-column">
        {products.map((product) => (
          <Contacto key={product.id} product={product} onAdd={onAdd}></Contacto>
        ))}
      </div> */}
    </main>
  );
}
