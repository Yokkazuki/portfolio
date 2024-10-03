import React, { useState } from "react"
import "./Qualification.scss"
import { FaUserGraduate } from "react-icons/fa"
import { BsFillBriefcaseFill } from "react-icons/bs"
import { BsFillCalendar3WeekFill } from "react-icons/bs"

const educations = [
    {
        title: 'Computer Engineering',
        college: 'HKMU',
        duration: '2019 - 2021'
    },
    {
        title: 'Associate of Engineering',
        college: 'HKU SPACE',
        duration: '2017 - 2019'
    }
]

const jobs = [
    {
        title: 'Frontend Programmer',
        company: 'Everyway Technology Limited',
        content: [
            'Develope and maintain a international SMS platform using Vue',
            'Collaborate with the backend team on API development',
            'Create solutions guided by the insights of the product team and design team'
        ],
        duration: '2023 - present'
    },
    {
        title: 'Analyst Programmer',
        company: 'PastelLink',
        content: [
            'Developed SharePoint by using React',
            'Involve designing a backend database structure using UML'
        ],
        duration: '2022 - 2022'
    },
    {
        title: 'Programmer',
        company: 'Quantr',
        content: [
            'Developed SharePoint by using React',
            'Integrated Power automate with SharePoint',
            'Engaged in discussions with clients to develop solutions'
        ],
        duration: '2020 - 2022'
    },
]

export default function Qualification() {
    const [isDisplayEducation, setIsDisplayEducation] = useState(false)

    return <div className="qualification" id="qualification">
        <div className="header">
            Qualification
        </div>

        <div className="qualification-tab">
            <div className={isDisplayEducation ? "qualification-tab-item" : "qualification-tab-item tab-active"} onClick={() => setIsDisplayEducation(false)}>
                <span className="text">
                    <BsFillBriefcaseFill className="qualification-icon" size="25px" />
                    Work
                </span>
            </div>
            <div className={isDisplayEducation ? "qualification-tab-item tab-active" : "qualification-tab-item"} onClick={() => setIsDisplayEducation(true)}>
                <span className="text">
                    <FaUserGraduate className="qualification-icon" size="25px" />
                    Education
                </span>
            </div>
        </div>

        <div className="qualification-list">
            {isDisplayEducation ? <div className="qualification-section education">
                <ul>
                    {educations.map(edu => {
                        return (<li key={edu.duration}>
                            <div className="education-info">
                                <div className="title">
                                    {edu.title}
                                </div>
                                <div className="subtitle">
                                    {edu.college}
                                </div>
                                <div className="date">
                                    <BsFillCalendar3WeekFill className="cal-icon" size="20px" />
                                    {edu.duration}
                                </div>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
                :
                <div className="qualification-section work">
                    <ul>
                        {jobs.map(job => {
                            return (
                                <li className="work-card" key={job.company}>
                                    <div className="work-info">
                                        <div className="title">
                                            {job.company}
                                        </div>
                                        <div className="subtitle">
                                            {job.title}
                                        </div>
                                        <div className="date">
                                            <BsFillCalendar3WeekFill className="cal-icon" size="20px" />
                                            {job.duration}
                                        </div>
                                    </div>
                                    <div className="work-detail">
                                        <div>
                                            {job.content.map((p, i) => {
                                                return <p key={'p' + i}>{p}</p>
                                            })}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }


        </div>
    </div>
}