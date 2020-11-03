import React from "react"
import "./coffee_and_ink.css"
import { Coffee } from "./coffee/coffee"
import { Journal } from "./journal/journal"
import profileImg from "./nav/profileImage.jpg"
import { NavBar } from "./nav/NavBar"
import { CoffeeProvider } from "./coffee/CoffeeProvider"
import { CoffeeBar } from "./coffee/CoffeeBar"

export const Coffee_and_Ink = () => (
    <>
        <article>
            <div >
                <NavBar />
            </div>
            
            <img className="profileImg" style={{ width: '30%' }} src={profileImg} />
            {/* <img className="paperImage" style={{width:'100%'}} src={paperImage} /> */}
            <section className="paperBorder">
                <div className="coffee">
                    <h2>Coffee</h2>
                        <CoffeeProvider>
                            <CoffeeBar />
                        </CoffeeProvider>
                </div>
                


                <div className="journal">
                    <h2>Journal</h2>
                    <div>
                        <Journal />
                    </div>
                </div>
            </section>
        </article>
    </>
)