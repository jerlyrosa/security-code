import React from "react";

class ClassState extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: false
    }
  }
  render() {


    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escriba el código de seguridad.</p>

        {this.state.error &&(
        <p>Error: el codigo es incorrecto</p>
      )}
        <input type="text" placeholder="código de seguridad" />
        <button  onClick={()=> this.setState(prevState =>({error: !prevState.error }) )}>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
