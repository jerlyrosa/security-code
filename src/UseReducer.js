import React, { useEffect, useReducer } from "react";

const SECURITY_CODE = "loki";

const initialState = {
  value: "loki",
  loading: false,
  error: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  error: "Error",
  confirm: "Confirm",
  write: "Write",
  check: "Check",
  delete: "Delete",
  reset: "Reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.confirm:
      return {
        ...state,
        loading: false,
        error: false,
        confirmed: true,
      };
    case actionTypes.write:
      return {
        ...state,
        value: action.payload,
      };
    case actionTypes.check:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.delete:
      return {
        ...state,
        deleted: true,
      };
    case actionTypes.reset:
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
          dispatch({ type: actionTypes.confirm });
        } else {
          dispatch({ type: actionTypes.error });
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
          dispatch({ type: actionTypes.write, payload: event.target.value })
        }
      />
      <button onClick={() => dispatch({ type: actionTypes.check })}>
        Comprobar
      </button>
    </div>
  ) : state.confirmed && !state.deleted ? (
    <section>
      <h2>Eliminar UseState</h2>
      <p>Pedimos confirmacion. ¿Estas seguro?</p>
      <button onClick={() => dispatch({ type: actionTypes.delete })}>
        Si, eliminar
      </button>
      <button onClick={() => dispatch({ type: actionTypes.reset })}>
        No, volver
      </button>
    </section>
  ) : (
    <section>
      <h2>Eliminar UseState</h2>
      <p>Estado eliminado con exito </p>
      <button onClick={() => dispatch({ type: actionTypes.reset })}>
        Recuperar estado
      </button>
    </section>
  );
};

export default UseReducer;
