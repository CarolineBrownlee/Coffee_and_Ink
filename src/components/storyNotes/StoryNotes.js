//component for setting the state of journal entries in the database and listing them

import React, { useContext, useEffect } from "react"
import { StoryNotesContext } from "./StoryNotesProvider"
import { Note } from "./note"
// import "./notes.css"

export const StoryNotes = () => {
    // This state changes when `getLocations()` is invoked below
    const { notes, getStoryNotes } = useContext(StoryNotesContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("StoryNotes: Initial render before data")
        getStoryNotes()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("StoryNotes: StoryNotes state changed")
        console.log(notes)
    }, [notes])

    return (
        <div className="notes">
        {
            notes.map(note => <Note key={note.id} storynote={note} />)
        }
        </div>
    )
}