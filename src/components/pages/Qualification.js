import React, { useState } from "react"
import "./Qualification.scss"
import { FaUserGraduate } from "react-icons/fa"
import { BsFillBriefcaseFill } from "react-icons/bs"
import { BsFillCalendar3WeekFill } from "react-icons/bs"

export default function Qualification() {
    const [isDisplayEducation, setIsDisplayEducation] = useState(true)

    return <div className="qualification" id="qualification">
        <div className="header">
            Qualification
        </div>

        <div className="qualification-tab">
            <div className={isDisplayEducation ? "qualification-tab-item tab-active" : "qualification-tab-item"} onClick={() => setIsDisplayEducation(true)}>
                <span className="text">
                    <FaUserGraduate className="qualification-icon" size="25px" />
                    Education
                </span>
            </div>
            <div className={isDisplayEducation ? "qualification-tab-item" : "qualification-tab-item tab-active"} onClick={() => setIsDisplayEducation(false)}>
                <span className="text">
                    <BsFillBriefcaseFill className="qualification-icon" size="25px" />
                    Work
                </span>
            </div>
        </div>

        <div className="qualification-list">
            {isDisplayEducation ? <div className="qualification-section education">
                <ul>
                    <li>
                        <div className="education-info">
                            <div className="title">
                                Computer Engineering
                            </div>
                            <div className="subtitle">
                                HKMU
                            </div>
                            <div className="date">
                                <BsFillCalendar3WeekFill className="cal-icon" size="20px" />
                                2019 - 2021
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="education-info">
                            <div className="title">
                                Associate of Engineering
                            </div>
                            <div className="subtitle">
                                HKU SPACE
                            </div>
                            <div className="date">
                                <BsFillCalendar3WeekFill className="cal-icon" size="20px" />
                                2017 - 2019
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
                :
                <div className="qualification-section work">
                    <ul>
                        <li className="work-card">
                            <div className="work-info">
                                <div className="title">
                                    PastelLink
                                </div>
                                <div className="subtitle">
                                    Analyst Programmer
                                </div>
                                <div className="date">
                                    <BsFillCalendar3WeekFill className="cal-icon" size="20px" />
                                    2022 - 2022
                                </div>
                            </div>
                            <div className="work-detail">
                                <div>
                                    <p>
                                        Developed SharePoint by using React
                                    </p>
                                    <p>
                                        Developed backend by using Java and C#
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="work-card">
                            <div className="work-info">
                                <div className="title">
                                    Quantr
                                </div>
                                <div className="subtitle">
                                    Programmer
                                </div>
                                <div className="date">
                                    <BsFillCalendar3WeekFill className="cal-icon" size="20px" />
                                    2020 - 2022
                                </div>
                            </div>
                            <div className="work-detail">
                                <div>
                                    <p>
                                        Developed SharePoint by using React
                                    </p>
                                    <p>
                                        integrated Power automate with SharePoint
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            }


        </div>
    </div>
}