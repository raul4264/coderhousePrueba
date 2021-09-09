import React from "react";

export default function ItemDetail(props) {
  const { product, onAdd } = props;
  return (
    <div className="product">
      <img className="small" src={product.image} alt={product.name} />
      <div className="descripcion">{product.descripcion}</div>
      <h3>{product.name}</h3>
      <div>${product.price}</div>

      <div>
        <button onClick={() => onAdd(product)}>Agregar al Carrito</button>
      </div>
    </div>
  );
}
