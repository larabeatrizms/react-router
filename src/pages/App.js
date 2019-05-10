import React from 'react';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <nav className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/home" className="navbar-item" >Home</Link>
                        <Link to="/atv1" className="navbar-item" >Atividade 1</Link>
                        <Link to="/info" className="navbar-item" >Info</Link>
                    </div>
                </nav>
                <section className="section">
                    <div className="container">
                    <h1 style={{"fontSize": "40px"}}>Home</h1>
                    <p> Bem-vindo ao site com exercícios aplicando React. </p>
                       
                    </div>

                </section>
                <footer class="footer">
                        <div class="content has-text-centered" style={{"margin":"400px 80px 100px"}}>
                            <p>
                            <strong>WebSite</strong> by <a href="https://github.com/larabeatrizms">Lara Beatriz</a>.
                            </p>
                        </div>
                </footer>
            </div>
        );
    }
}
