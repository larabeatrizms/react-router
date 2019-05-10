import React from 'react';

export default class BotaoPonto extends React.Component {

    handleClick(event) {
        event.preventDefault();
        this.props.marcarPonto();
    }

    render(){
        return (
            <div>
                <a class="button is-primary is-inverted is-rounded"  onClick={this.handleClick.bind(this)}>+1 ponto</a>
            </div>
        );
    }
}