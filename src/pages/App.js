import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <nav className="navbar-menu">
                    <div className="navbar-start">
                        <a href="#" className="navbar-item">Home</a>
                        <a href="#" className="navbar-item">Atividade 1</a>
                        <a href="#" className="navbar-item">Info</a>
                    </div>
                </nav>

                <section className="section">
                    <div className="container">
                       {this.props.children}
                    </div>
                </section>
            </div>
        );
    }
}
