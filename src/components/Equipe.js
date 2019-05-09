import React from 'react';

import Botao from './BotaoPonto'

export default class Time extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.pontos}</h2>
                <Botao marcarPonto={this.props.marcarPonto} />
            </div>
        );
    }
}