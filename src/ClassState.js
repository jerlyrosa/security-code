import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "ragnar";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    console.log(
      "componentDidUpdate: Se ejecuta cuando se actualiza nuestro estado"
    );

    if (this.state.loading) {
      console.log("Validando...");
      setTimeout(() => {
        console.log("Final de la Validacion");
        if (this.state.value === SECURITY_CODE) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
      }, 3000);
    }
  }

  render() {
    const { error, value, loading } = this.state;
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escriba el código de seguridad.</p>

        {error && !loading && <p>Error: el codigo es incorrecto</p>}

        {loading && <Loading />}

        <input
          type="text"
          placeholder="código de seguridad"
          value={value}
          onChange={(event) => this.setState({ value: event.target.value })}
        />
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
