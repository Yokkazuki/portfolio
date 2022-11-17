import React, { useContext } from "react"
// import { Routes, Route } from "react-router-dom"
import "./Container.scss"
import Introduction from "./Introduction"
import Contact from "./Contact"
import Qualification from "./Qualification"
import AboutMe from "./AboutMe"
import { ThemeContext } from "../../theme/ThemeContext"

export default function Container() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div id={darkMode ? "theme-dark" : "theme-light"}>
      <div className="Container">
        {/* <Routes>
          <Route index path="/home" element={<Home />} />
        </Routes> */}
        <Introduction />
        <AboutMe />
        <Qualification />
        <Contact />
      </div>
    </div>
  );
}