import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    prueba() {
        return <h1>Esto es otra prueba</h1>
    }
  render() {
      let value= "Alberto";
      let valerio= 2+2;
      let user= {
        "name": "Alberto",
          "lastname": "Cuadrado"
      };
      let elemento= <h1>Prueba</h1>;
    return (
      <div>
        <h1>Mi primera aplicacion. {value}. {valerio}. {user.lastname}</h1>
          {elemento}
        <p>Probando cositas en react</p>
          {this.prueba()}
      </div>
    );
  }
}

export default App;