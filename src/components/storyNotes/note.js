//component for rendering a single story note

import React from "react"
// import "./journal.css"

export const Note = ({storynote}) => (
    <section className="note">
        <h3 className="sprint">{storynote.sprint}</h3>
        <div className="story__number">{storynote.storynumber}</div>
        <div className="story__technologies">{storynote.technologies}</div>
        <div className="story__description">{storynote.description}</div>
        <div className="story__notes">{storynote.notes}</div>
    </section>
)