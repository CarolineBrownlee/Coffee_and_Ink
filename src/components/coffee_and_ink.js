import React from "react"
import "./coffee_and_ink.css"
import { Coffee } from "./coffee/coffee"
import { Journal } from "./journal/journal"
import paperImage from "./paper.jpg"
import { NavBar } from "./nav/NavBar"

export const Coffee_and_Ink = () => (
    <>
        <article>
            <div >
                {/* <h2 id="title" style={{ font:'bold' }}>Coffee and Ink</h2> */}
                {/* <img className="paperImage" style={{width:'100%'}} src={paperImage} /> */}
                <NavBar />
            </div>
            {/* <img className="paperImage" style={{width:'100%'}} src={paperImage} /> */}
            {/* <section className="paperBorder">
                <div className="coffee">
                    <h2>Coffee</h2>
                    <div>
                        <Coffee />
                    </div>
                </div>
                <div className="journal">
                    <h2>Journal</h2>
                    <div>
                        <Journal />
                    </div>
                </div>
            </section> */}
        </article>
    </>
)