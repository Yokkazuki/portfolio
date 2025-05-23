import React from "react";
import "./Project.scss";
import vueMemoryGame from "../../image/vue_memory_game.jpg";
import smMedia from "../../image/sm_media.png";
import shoppingApp from "../../image/shopping_app.png";

const projects = [
  {
    title: "Shopping Website",
    img: shoppingApp,
    url: "https://ykzk-wannagoods.vercel.app/",
  },
  // {
  //   title: "Simple Social Media",
  //   img: smMedia,
  //   url: "https://ykzk-nextjs-social-media.vercel.app/",
  // },
  {
    title: "Vue Memory game",
    img: vueMemoryGame,
    url: "https://ykzk-vue-memory-game.vercel.app/",
  },
];

export default function Project() {
  return (
    <div className="project" id="project">
      <div className="header">project</div>

      <div className="project-list">
        {projects.map((project) => {
          return (
            <a
              href={project.url}
              target={"_blank"}
              rel="noreferrer"
              key={project.title}
            >
              <div className="project-card">
                <div className="image-container">
                  <img src={project.img} alt="" />
                </div>
                <div className="title">{project.title}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
