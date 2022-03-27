import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }

  // UNSAFE_componentWillMount(){
  //   console.log('componentWillMount: Inicia antes de renderizar nuestro componentes ');

  // }

  // componentDidMount(){
  //   console.log('componentDidMount: Se ejecuta cuando se renderiza por primera vez  ');

  // }

  componentDidUpdate() {
    console.log(
      "componentDidUpdate: Se ejecuta cuando se actualiza nuestro estado"
    );

    if (this.state.loading) {
      console.log("Validando...");
      setTimeout(() => {
        console.log("Final de la Validacion");

        this.setState({ loading: false });
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escriba el código de seguridad.</p>

        {this.state.error && <p>Error: el codigo es incorrecto</p>}

        {this.state.loading && <Loading />}

        <input type="text" placeholder="código de seguridad" />
        <button
          onClick={() => this.setState((prevState) => ({ loading: true }))}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
