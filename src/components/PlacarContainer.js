import React from 'react';

import Equipe from './Equipe';
import Info from './Info';
import { relative } from 'path';

export default class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            placar_Time1: 0,
            placar_Time2: 0,
            placar_Time3: 0,
        };

    }

    incrementarTime1() {
        this.setState({
            placar_Time1: this.state.placar_Time1 + 1,
        });
    }

    
    incrementarTime2() {
        this.setState({
            placar_Time2: this.state.placar_Time2 + 1,
        });
    }

    incrementarTime3() {
        this.setState({
            placar_Time3: this.state.placar_Time3 + 1,
        });
    }

    render() {
        const { info, equipe1, equipe2, equipe3 } = this.props;
        const estilo = {    float: "left", 
                            "margin": "20px" , 
                            position: "relative"};
        const estilo2 = { "textAlign": "center", "fontFamily": "'Roboto Mono', monospace"};
        const estilo3 = { "display": "flex"};
        
        return(
            <div style={estilo3}>

                <div style={estilo2}>
                    <div>
                        <Info {...info} />
                    </div>
                    <div style={estilo}>
                        <h3 ><b>Equipe 1</b></h3>
                        <Equipe   nome={equipe1.nome} 
                                pontos={this.state.placar_Time1}
                                marcarPonto={this.incrementarTime1.bind(this)}/>
                    </div>
                    
                    <div style={estilo}>
                        <h3><b>Equipe 2</b></h3>
                        <Equipe   nome={equipe2.nome} 
                                pontos={this.state.placar_Time2}
                                marcarPonto={this.incrementarTime2.bind(this)}/>
                    </div>

                    <div style={estilo}>
                        <h3><b>Equipe 3</b></h3>
                        <Equipe   nome={equipe3.nome} 
                                pontos={this.state.placar_Time3}
                                marcarPonto={this.incrementarTime3.bind(this)}/>
                    </div>
                    <div>{this.props.clima}</div>
                    <div style={{clear: "both"}}></div>
                </div>
            </div>
        );
    }
}
/*
PlacarContainer.propTypes = {
    clima: React.PropTypes.string,
    tempo: React.PropTypes.number.isRequired,
};

PlacarContainer.defaultProps = {
    clima: 'Ensoralado'
};
*/