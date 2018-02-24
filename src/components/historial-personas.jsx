import React from 'react';

export default class HistorialPersonas extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.historialNombres}</p>
            </div>
        );
    }
}