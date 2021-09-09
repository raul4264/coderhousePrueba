import React from "react";

class ItemCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0, fecha: new Date().toString() };
  }

  onSumarNumero() {
    this.setState((prevState) => ({
      contador: this.state.contador + 1,
      fecha: new Date().toString(),
    }));
  }

  onRestarNumero() {
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h1>Hola Coders!</h1>
        <button onClick={this.onSumarNumero.bind(this)}>Increase</button>
        <button onClick={this.onRestarNumero.bind(this)}>Decrease</button>
        <p>{this.state.contador}</p>
        <p>{this.state.fecha}</p>
      </div>
    );
  }
}

export default ItemCount;
