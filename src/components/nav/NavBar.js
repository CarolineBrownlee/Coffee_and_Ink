import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
// import paper from "./paper.jpg"

export const NavBar = () => {
    return (
        <>
            <h2 id="title" style={{ font: 'bold' }}>( coffee & ink )</h2>
            {/* <img className="paper" style={{ width: '100%' }} src={paper} /> */}
            <section className="navListBorder">
                <ul className="navbar" style={{ textDecoration: 'none' }}>
                    <li className="navbar__item active" >
                        <Link className="navbar__link" to="/">Home</Link>
                    </li>
                    <li className="navbar__item" >
                        <Link className="navbar__link" to="/coffeebar">coffee bar</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/journal">journal</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/storynotes">story notes</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/helpfullinks">cool links</Link>
                    </li>
                </ul>
            </section>
        </>
    )
}