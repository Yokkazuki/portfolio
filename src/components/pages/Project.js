import React from "react";
import "./Project.scss";
import reduxShoppingAppImage from '../../image/redux_shopping_app_image.jpg';

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
        </div>
    </div>



}