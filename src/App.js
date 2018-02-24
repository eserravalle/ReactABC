import React from 'react';
import './App.css';
import DatosPersona from './components/datos-persona';
import HistorialPersonas from './components/historial-personas';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      historialNombres: []
    };

    this.tratarNuevaPersona = this.tratarNuevaPersona.bind(this);
  }

  tratarNuevaPersona(nuevoNombre) {
    this.setState((prevState) => ({
      nombre: nuevoNombre,
      historialNombres: prevState.historialNombres.concat(nuevoNombre)
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ejercicio Intive</h1>
        </header>
        <p className="App-intro">
          Nombre: Ernesto Serravalle
        </p>
        <DatosPersona nombre={this.state.nombre} actualizarPadre={this.tratarNuevaPersona} />
        <HistorialPersonas historialNombres={this.state.historialNombres} />
      </div>
    );
  }
}

export default App;
