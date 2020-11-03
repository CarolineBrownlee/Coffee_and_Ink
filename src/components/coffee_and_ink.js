import React from "react"
import "./coffee_and_ink.css"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const Coffee_and_Ink = () => (
    <>
        <article>
            <div >
                <NavBar />
                <ApplicationViews />
            </div>
            <div className="paperBorder">
            </div>
        </article>
    </>
)