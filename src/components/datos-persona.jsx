import React from 'react';

export default class DatosPersona extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: props.nombre,
        };

        this.tratarCambiosDelNombre = this.tratarCambiosDelNombre.bind(this);
        this.saludar = this.saludar.bind(this);
    }

    tratarCambiosDelNombre(e) {
        this.setState({ nombre: e.target.value });
    }

    saludar(e) {
        this.setState({ nombre: "" });
        this.props.actualizarPadre(this.state.nombre);
    }

    render() {
        return (
            <div>
                <label htmlFor="txtNombre">Nombre: </label>
                <input value={this.state.nombre} type="text" id="txtNombre" onChange={this.tratarCambiosDelNombre} />
                <button onClick={this.saludar}>Saludar</button>
            </div>
        );
    }
}