import { Component } from "react";
import list from "../assets/list";

export default class IneditQuestions extends Component {
    state = {
        listPodcasts: list.questionBank 
    }

    render() {
        return (
            <section className="container">

                <div className="header-page">
                    <h1>Seja bem vindo ao nosso Banco de Questões</h1>
                    <p>Aqui você poderá ver os nossos vídeos produzidos, e assistir os episódios empuolgantes e super interativos, de conversas e opiniões de convidados especiais debatendo sobre a matemática.</p>
                </div>

                <main className="video-list">
                <iframe src={this.state.listPodcasts[0].link} width='90%' height='1000' frameborder="0"></iframe>
                </main>
                

            </section>
        )
    }
}