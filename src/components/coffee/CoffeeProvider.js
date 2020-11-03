import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CoffeeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CoffeeProvider = (props) => {
    const [coffees, setCoffeeBar] = useState([])

    const getCoffeeBar = () => {
        return fetch("http://localhost:8088/coffee")
            .then(res => res.json())
            .then(setCoffeeBar)
    }

    const addCoffee = coffee => {
        return fetch("http://localhost:8088/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
            .then(getCoffeeBar)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CoffeeContext.Provider value={{
            coffees, addCoffee, getCoffeeBar
        }}>
            {props.children}
        </CoffeeContext.Provider>
    )
}