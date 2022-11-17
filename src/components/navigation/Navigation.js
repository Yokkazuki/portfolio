import React, { useContext, useState } from "react"
import "./Navigation.scss"
import DarkModeButton from "../../theme/ThemeButton"
import { ThemeContext } from "../../theme/ThemeContext"
import { HiBars3 } from "react-icons/hi2"
import { FaTimes } from "react-icons/fa"

export default function Navigation() {
    const { darkMode } = useContext(ThemeContext)
    const [isMoblieMenuExpand, setMoblieMenuExpand] = useState(false)

    return (
        <div id={darkMode ? "theme-dark" : "theme-light"}>
            <div className="navbar" >
                {/* left */}
                <div className="nav-left">
                    <div className="brand">
                        Portfolio
                    </div>
                </div>

                {/* right */}
                <div className="nav-right">
                    <div className="linkList">

                        <a className="linkItem" href="#home" key="home">
                            home
                        </a>
                        <a className="linkItem" href="#aboutme" key="aboutme">
                            about me
                        </a>
                        <a className="linkItem" href="#qualification" key="qualification">
                            qualification
                        </a>
                        <a className="linkItem" href="#contact" key="contact">
                            contact
                        </a>

                        <div className="linkItem">
                            <DarkModeButton />
                        </div>
                    </div>
                    <HiBars3 className="link-expand-button" size="35" onClick={() => { setMoblieMenuExpand(true) }} />
                </div>

                <div class={"moblie-nav " + (isMoblieMenuExpand ? "is-open" : "")} id="moblie-nav">
                    <FaTimes className="close-expand-btn" size="35" onClick={() => setMoblieMenuExpand(false)} />
                    <div className="moblie-linkList">

                        <a className="moblie-linkItem" href="#home" key="home" onClick={() => setMoblieMenuExpand(false)}>
                            home
                        </a>
                        <a className="moblie-linkItem" href="#aboutme" key="aboutme" onClick={() => setMoblieMenuExpand(false)}>
                            about me
                        </a>
                        <a className="moblie-linkItem" href="#qualification" key="qualification" onClick={() => setMoblieMenuExpand(false)}>
                            qualification
                        </a>
                        <a className="moblie-linkItem" href="#contact" key="contact" onClick={() => setMoblieMenuExpand(false)}>
                            contact
                        </a>

                        <div className="moblie-linkItem">
                            <DarkModeButton size="35" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
