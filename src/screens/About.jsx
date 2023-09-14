import { Component } from "react";
import list from "../assets/list";

export default class About extends Component {
    state = {
        personsList: list.participants
    }

    render() {
        return (
            <section className="container">
                <div className="header-page">
                    <h1>Conheça mais sobre o projeto</h1>
                    <p style={{ marginBottom: 50 }}>Somos a equipe SEMI, um grupo de alunos apaixonados e dedicados que compartilham um compromisso com a aprendizagem da matemática, com excelência e inovação.
somos muito participativos e estamos sempre abertos à colaboração e valorizamos as ideias de cada membro da equipe. Acreditamos que a diversidade de perspectivas enriquece nosso projeto.</p>

                    <h2>Confira os nossos Contribuidores</h2>
                    <p>Aqui você poderá ver os nossos vídeos produzidos, e assistir os episódios empuolgantes e super interativos, de conversas e opiniões de convidados especiais debatendo sobre a matemática.</p>
                </div>
                
                <main className="persons-container container d-flex flex-wrap align-items-center justify-content-center">
                    {
                        this.state.personsList.map(person =>  (
                            <div className="person-card">
                                <img src={`/person/${person.name.toLowerCase()}.jpeg`} alt="icon" className="img-person" />
                                <h3>{person.name}</h3>
                                <h4>{person.funcao}</h4>
                                <a href={`https://instagram.com/${person.instaIg}`} className="nav-link">
                                    <p><i class="bi bi-instagram"></i> {person.instaIg}</p>
                                </a>
                            </div>
                            ))
                    }
                </main>
            </section>
        )
    }
}