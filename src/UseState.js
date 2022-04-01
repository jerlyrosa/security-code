import React, { useState, useEffect } from "react";

const SECURITY_CODE = "ragnar";

const UseState = () => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
  });
  // const [value, setValue] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: false,
          });
        } else {
          setState({
            ...state,
            error: false,
            loading: false,
          });
        }
      }, 3000);
    }
  }, [state.loading, state.value]);
  return (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Por favor, escriba el código de seguridad.</p>

      {state.error && !state.loading && <p>Error: el codigo es incorrecto</p>}

      {state.loading && <p>Cargando...</p>}
      <input
        type="text"
        placeholder="código de seguridad"
        value={state.value}
        onChange={(event) => setState({ ...state, value: event.target.value })}
      />
      <button onClick={() => setState({ ...state, loading: true })}>
        Comprobar
      </button>
    </div>
  );
};

export { UseState };
