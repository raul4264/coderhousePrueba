import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nosotros from "./Nosotros";
import Product from "./Product";
<Switch>
  <Route path="/contacto"></Route>
  <Route path="/nosotros"></Route>
  <Route path="/inicio"></Route>
</Switch>;

export default function NavBar(props) {
  return (
    <Router>
      <header className="block row center container-fluid">
        <div>
          <a href="#/">
            <h1>
              Carrito de Compras - Ecommerce<span> (Raul Novas)</span>
            </h1>
          </a>
        </div>
        <div>
          <a href="#/cart">
            Carrito{" "}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ""
            )}
          </a>{" "}
          <a href="#/signin"> Registrarse</a>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/contacto">
          <Product />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/inicio"></Route>
      </Switch>
    </Router>
  );
}
