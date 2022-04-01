import React from "react";

class Loading extends React.Component {
  componentWillUnmount() {
    console.log(
      "componentWillUnmount: Se ejecuta cuando se desmonta el componente"
    );
  }

  render() {
    return <p>Cargando...</p>;
  }
}

export { Loading };
