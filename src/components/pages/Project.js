import React from "react";
import "./Project.scss";
import vueMemoryGame from '../../image/vue_memory_game.jpg';
import smMedia from '../../image/sm_media.png'

const projects = [
    {
        title: 'Simple Social Media',
        img: smMedia,
        url: 'https://ykzk-nextjs-social-media.vercel.app/'
    },
    {
        title: 'Vue Memory game',
        img: vueMemoryGame,
        url: 'https://yokkazuki.github.io/vue-memory-game'
    },
]

export default function Project() {

    return <div className="project" id="project">

        <div className="header">
            project
        </div>

        <div className="project-list">
            {projects.map(project => {
                return (
                    <a href={project.url} target={"_blank"} rel="noreferrer" key={project.title}>
                        <div className="project-card">
                            <div className="image-container">
                                <img src={project.img} alt="" />
                            </div>
                            <div className="title">{project.title}</div>
                        </div>
                    </a>
                )
            })}
        </div>
    </div>



}