//fetch calls to the API to put data into context to be used by other components 

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const JournalContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const JournalProvider = (props) => {
    const [entries, setJournal] = useState([])

    const getJournal = () => {
        return fetch("http://localhost:8088/journal")
            .then(res => res.json())
            .then(setJournal)
    }

    const addEntry = entry => {
        return fetch("http://localhost:8088/journal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
            .then(getJournal)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <JournalContext.Provider value={{
            entries, addEntry, getJournal
        }}>
            {props.children}
        </JournalContext.Provider>
    )
}