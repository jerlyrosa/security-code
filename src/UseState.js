import React, { useState, useEffect } from "react";

const SECURITY_CODE = "ragnar";

const UseState = () => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onWrite = (newEvent) => setState({ ...state, value: newEvent });

  const onCheck = () => setState({ ...state, loading: true });

  const onDelete = () => setState({ ...state, deleted: true });

  const onReset = () => {
    setState({ ...state, confirmed: false, deleted: false, value: "" });
  };

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 3000);
    }
  }, [state.loading, state]);

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
        onChange={(event) => onWrite(event.target.value)}
      />
      <button onClick={() => onCheck()}>Comprobar</button>
    </div>
  ) : state.confirmed && !state.deleted ? (
    <section>
      <h2>Eliminar UseState</h2>
      <p>Pedimos confirmacion. ¿Estas seguro?</p>
      <button onClick={() => onDelete()}>Si, eliminar</button>
      <button onClick={() => onReset()}>No, volver</button>
    </section>
  ) : (
    <section>
      <h2>Eliminar UseState</h2>
      <p>Estado eliminado con exito </p>
      <button onClick={() => onReset()}>Recuperar estado</button>
    </section>
  );
};

export { UseState };
