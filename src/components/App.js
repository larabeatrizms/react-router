import React from 'react';
import { Link } from 'react-router-dom'


import PlacarContainer from './PlacarContainer';

let dados = {
    info: {
        lugar: "UFRN",
        titulo: "Competição entre equipes em uma turma",
        data: "08/05",
        horario: "",
    },
    equipe1: {
        nome: "Equipe Vermelha",
    },
    equipe2: {
        nome: "Equipe Azul",
    },
    equipe3: {
        nome: "Equipe Verde",
    }
};

export default class App extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/home" className="navbar-item" >Home</Link>
                        <Link to="/atv1" className="navbar-item">Atividade 1</Link>
                        <Link to="/info" className="navbar-item">Info</Link>
                    </div>
                </nav>
                <section className="section">
                    <div className="container" style={{"textAlign": "left"}}>
                        <h1 style={{"fontSize": "40px"}}>Componentes</h1>
                        <p>
                            Neste exercício foi aplicado conceitos de componente e como utilizá-los.
                        </p>
                        <p>
                            O exercício consiste em utilizar componentes que fazem a contagem de pontos em uma disputa entre equipes. 
                            Cada vez que o botão é pressionado os pontos da equipe correspondente é incrementado. 
                        </p>
            
                    </div>
                    <div className="container" style={{"margin": "40px"}}>
                        <PlacarContainer {...dados} />
                    </div>
                </section>
                <footer class="footer">
                        <div class="content has-text-centered" style={{"margin":"100px 80px 100px"}}>
                            <p>
                            <strong>WebSite</strong> by <a href="https://github.com/larabeatrizms">Lara Beatriz</a>.
                            </p>
                        </div>
                </footer>
            </div>
        );
    }
}