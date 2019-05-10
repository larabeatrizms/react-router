import React from 'react';
import { Link } from 'react-router-dom'

export default class Info extends React.Component {

    constructor() {
        super();
    }

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
                    <div className="container">
                    <h1 style={{"font-size": "40px"}}>Info</h1>
                    <p> Site desenvolvido para aplicação dos conceitos em React.</p>
                       
                    </div>
                </section>
            </div>
        );
    }
}