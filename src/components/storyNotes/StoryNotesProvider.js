//fetch calls to the API to put data into context to be used by other components 

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const StoryNotesContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const StoryNotesProvider = (props) => {
    const [notes, setStoryNotes] = useState([])

    const getStoryNotes = () => {
        return fetch("http://localhost:8088/storynotes")
            .then(res => res.json())
            .then(setStoryNotes)
    }

    const addStoryNotes = notes => {
        return fetch("http://localhost:8088/storynotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notes)
        })
            .then(getStoryNotes)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <StoryNotesContext.Provider value={{
            notes, addStoryNotes, getStoryNotes
        }}>
            {props.children}
        </StoryNotesContext.Provider>
    )
}