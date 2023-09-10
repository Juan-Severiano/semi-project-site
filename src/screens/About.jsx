import { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <section className="container">
                <div className="header-page">
                    <h1>Confira os nossos Contribuidores</h1>
                    <p>Aqui você poderá ver os nossos vídeos produzidos, e assistir os episódios empuolgantes e super interativos, de conversas e opiniões de convidados especiais debatendo sobre a matemática.</p>
                </div>
                <div className="person-card">
                    <img src="/adaptive-icon.png" alt="icon" className="img-person" />
                    <h3>Nome do zé ruela</h3>
                    <h4>funçao do caba</h4> 
                    <p>@asdasdasda</p>
                </div>
            </section>
        )
    }
}