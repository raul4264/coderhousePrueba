import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div style={{ fontSize: "5em", color: "blue" }}>
      <FontAwesomeIcon icon={faCat} />
      {""}
    </div>
  );
}
export default CartWidget;
