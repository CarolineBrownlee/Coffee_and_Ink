import React from "react"
import "./coffee.css"

export const Coffee = ({coffee}) => (
    <section className="coffee">
        <h3 className="coffee__name">{coffee.name}</h3>
        <div className="coffee__type">{coffee.type}</div>
    </section>
)