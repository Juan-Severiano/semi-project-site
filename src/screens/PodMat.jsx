import { Component } from "react";
import list from "../assets/list";

export default class PodMat extends Component {
    state = {
        listPodcasts: list.podmat 
    }

    render() {
        return (
            <section className="container">

                <div className="header-page">
                    <h1>Seja bem vindo aos nossos Podcasts</h1>
                    <p>Aqui você poderá ver os nossos vídeos produzidos, e assistir os episódios empuolgantes e super interativos, de conversas e opiniões de convidados especiais debatendo sobre a matemática.</p>
                </div>

                <main className='video-list'>
                { 
                    this.state.listPodcasts.map(item =>  (
                            <iframe width="560" height="315" 
                                src={item.link} 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>

                            </iframe>
                        ))
                }
                </main>

                

            </section>
        )
    }
}
