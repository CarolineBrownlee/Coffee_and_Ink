import React from "react"
import "./coffee_and_ink.css"
import { ApplicationViews } from "./ApplicationViews"
import { JournalEntry } from "./journal/entry"
import profileImg from "./nav/profileImage.jpg"
import { NavBar } from "./nav/NavBar"
import { CoffeeProvider } from "./coffee/CoffeeProvider"
import { CoffeeBar } from "./coffee/CoffeeBar"
import { JournalProvider } from "./journal/JournalProvider"
import { StoryNotes } from "./storyNotes/StoryNotes"
import { StoryNotesProvider } from "./storyNotes/StoryNotesProvider"

export const Coffee_and_Ink = () => (
    <>
        <article>
            <div >
                <NavBar />
                <ApplicationViews />
            </div>
            
            <img className="profileImg" style={{ width: '30%' }} src={profileImg} />
            {/* <img className="paperImage" style={{width:'100%'}} src={paperImage} /> */}
            <section className="paperBorder">
                {/* <div className="coffee">
                    <h2>Coffee</h2>
                        <CoffeeProvider>
                            <CoffeeBar />
                        </CoffeeProvider>
                </div> */}
                
                <div className="journal">
                    <h2>Journal</h2>
                    <div>
                        <JournalProvider>
                            <JournalEntry />
                        </JournalProvider>
                    </div>
                </div>

                <div className="story__notes">
                    <h2>User Story Notes</h2>
                    <div>
                        <StoryNotesProvider>
                            <StoryNotes />
                        </StoryNotesProvider>
                    </div>
                </div>

            </section>
        </article>
    </>
)