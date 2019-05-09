import React from 'react';

export default class BotaoPonto extends React.Component {

    handleClick(event) {
        event.preventDefault();
        this.props.marcarPonto();
    }

    render(){
        return (
            <button onClick={this.handleClick.bind(this)}>+1 ponto</button>
        );
    }
}