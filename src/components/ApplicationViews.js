import React from "react"
import { Route } from "react-router-dom"
import { CoffeeProvider } from "./coffee/CoffeeProvider"
import { Home } from "./home/homepage"
import { CoffeeBar } from "./coffee/CoffeeBar"
import { JournalProvider} from "./journal/JournalProvider"
import { Journal } from "./journal/Journal"
import { StoryNotesProvider } from "./storyNotes/StoryNotesProvider"
import { StoryNotes } from "./storyNotes/StoryNotes"

export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <CoffeeProvider>
                <Route path="/coffee">
                    <CoffeeBar />
                </Route>
            </CoffeeProvider>
            <JournalProvider>
                <Route path="/journal">
                    <Journal />
                </Route>  
            </JournalProvider>
            <StoryNotesProvider>
                <Route path="/storynotes">
                    <StoryNotes />
                </Route>  
            </StoryNotesProvider>
        </>
    )
}