//component for setting the state of journal entries in the database and listing them

import React, { useContext, useEffect } from "react"
import { JournalContext } from "./JournalProvider"
import { JournalEntry } from "./entry"
import "./journal.css"

export const Journal = () => {
    // This state changes when `getLocations()` is invoked below
    const { entries, getJournal } = useContext(JournalContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("Journal: Initial render before data")
        getJournal()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("Journal: Journal state changed")
        console.log(entries)
    }, [entries])

    return (
        <div className="entries">
        {
            entries.map(entry => <JournalEntry key={entry.id} entry={entry} />)
        }
        </div>
    )
}