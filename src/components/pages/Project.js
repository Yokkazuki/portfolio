import React from "react";
import "./Project.scss";
import reduxShoppingAppImage from '../../image/redux_shopping_app_image.jpg';
import vueMemorygAME from '../../image/vue_memory_game.jpg';

export default function Project() {

    return <div className="project" id="project">

        <div className="header">
            project
        </div>

        <div className="project-list">
            <a href="https://yokkazuki.github.io/redux-shopping-app" target={"_blank"} rel="noreferrer">
                <div className="project-card">
                    <div className="image-container">
                        <img src={reduxShoppingAppImage} alt="" />
                    </div>
                    <div className="title">Redux Shopping app</div>
                </div>
            </a>
            <a href="https://yokkazuki.github.io/vue-memory-game" target={"_blank"} rel="noreferrer">
                <div className="project-card">
                    <div className="image-container">
                        <img src={vueMemorygAME} alt="" />
                    </div>
                    <div className="title">Vue Memory game</div>
                </div>
            </a>
        </div>
    </div>



}