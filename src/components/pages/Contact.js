import React from "react"
import "./Contact.scss"
import { AiFillMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"

export default function Contact() {
    return <div className="contact" id="contact">
        <div className="header">
            Contact me
        </div>
        <div className="contact-list">
            <div className="contact-info">
                <BsFillTelephoneFill className="contact-icon" size="25px" />
                <div className="content">
                    <div className="title">Phone</div>
                    <span className="subtitle">5541 8126</span>
                </div>
            </div>
            <div className="contact-info">
                <AiFillMail className="contact-icon" size="25px" />
                <div className="content">
                    <div className="title">Email</div>
                    <span className="subtitle">sma990404@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
}