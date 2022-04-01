import React, { useEffect, useReducer } from "react";

const SECURITY_CODE = "loki";

const initialState = {
  value: "loki",
  loading: false,
  error: false,
  deleted: false,
  confirmed: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Error":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "Confirm":
      return {
        ...state,
        loading: false,
        error: false,
        confirmed: true,
      };
    case "Write":
      return {
        ...state,
        value: action.payload,
      };
    case "Check":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "Delete":
      return {
        ...state,
        deleted: true,
      };
    case "Reset":
      return {
        ...state,
        value: "",
        confirmed: false,
        deleted: false,
      };
    default:
      return {
        ...state,
      };
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          dispatch({ type: "Confirm" });
        } else {
          dispatch({ type: "Error" });
        }
      }, 3000);
    }
  }, [state.loading, state.value]);
  return !state.confirmed && !state.deleted ? (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Por favor, escriba el código de seguridad.</p>

      {state.error && !state.loading && <p>Error: el codigo es incorrecto</p>}

      {state.loading && <p>Cargando...</p>}
      <input
        type="text"
        placeholder="código de seguridad"
        value={state.value}
        onChange={(event) =>
          dispatch({ type: "Write", payload: event.target.value })
        }
      />
      <button onClick={()=>dispatch({ type: "Check" })}>Comprobar</button>
    </div>
  ) : state.confirmed && !state.deleted ? (
    <section>
      <h2>Eliminar UseState</h2>
      <p>Pedimos confirmacion. ¿Estas seguro?</p>
      <button onClick={() => dispatch({ type: "Delete" })}>Si, eliminar</button>
      <button onClick={() => dispatch({ type: "Reset" })}>No, volver</button>
    </section>
  )
  : (
    <section>
      <h2>Eliminar UseState</h2>
      <p>Estado eliminado con exito </p>
      <button onClick={() => dispatch({ type: "Reset" })}>
        Recuperar estado
      </button>
    </section>
  );
};

export default UseReducer;
