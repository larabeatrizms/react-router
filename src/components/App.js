import React from 'react';

import PlacarContainer from './PlacarContainer';

let dados = {
    info: {
        lugar: "UFRN",
        data: "05/05/2019",
        horario: "13h",
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
                <PlacarContainer {...dados} />
            </div>
        );
    }
}