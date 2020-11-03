//component for rendering a single journal entry

import React from "react"
import "./journal.css"

export const JournalEntry = () => (
    <section className="journal">
        <h3 className="entry__title">Halloween</h3>
        <div className="entry__date">Oct. 31, 2020</div>
    </section>
)