import React,{useState} from "react";

const UseState = () => {

  const [error, setError] = useState(false);
  return (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Por favor, escriba el código de seguridad.</p>

      {error &&(
        <p>Error: el codigo es incorrecto</p>
      )}
      <input type="text" placeholder="código de seguridad" />
      <button onClick={()=> setError(!error)}>Comprobar</button>
    </div>
  );
};

export { UseState };
