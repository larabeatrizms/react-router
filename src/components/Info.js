import React from 'react';

export default class Partida extends React.Component {
    render(){
        return (
            <div>
                <span>{this.props.lugar}</span>
                <span> - </span>
                <span>{this.props.data}</span>
                <span> - </span>
                <span>{this.props.horario}</span>
            
            </div>
        );
    }
}