import React, { useState, useEffect } from "react";

const UseState = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("Inicio del efecto");

    if (loading) {
      // console.log("Validando...");
      setTimeout(() => {
        // console.log("Final de la Validacion");

        setLoading(false);
      }, 3000);
    }
    // console.log("Final del efecto");
  }, [loading]);
  return (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Por favor, escriba el código de seguridad.</p>

      {error && <p>Error: el codigo es incorrecto</p>}

      {loading && <p>Cargando...</p>}
      <input type="text" placeholder="código de seguridad" />
      <button onClick={() => setLoading(!error)}>Comprobar</button>
    </div>
  );
};

export { UseState };
