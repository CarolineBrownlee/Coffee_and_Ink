import React from "react"
import "./coffee_and_ink.css"
import { Coffee } from "./coffee/coffee"
import { Journal } from "./journal/journal"
// import typewriterImage from "./typewriterImage.jpg"

export const Coffee_and_Ink = () => (
    <>
        <header >
            <h2 id="title" style={{ font:'bold' }}>Coffee and Ink</h2>
            {/* <img className="typewriterImg" src={typewriterImage} /> */}
        </header>
        <div>
            <h2>Coffee</h2>
            <article className="coffee">
                <Coffee />
                <Coffee />
                <Coffee />
            </article>
        </div>
        <div>
            <p>Ink</p>
            <h2>Journal Entries</h2>
            <article className="journal">
                <Journal />
                <Journal />
                <Journal />
            </article>
        </div>
    </>
)