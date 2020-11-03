import React, { useContext, useEffect } from "react"
import { CoffeeContext } from "./CoffeeProvider"
import { Coffee } from "./coffee"
import "./coffee.css"

export const CoffeeBar = () => {
    // This state changes when `getLocations()` is invoked below
    const { coffees, getCoffeeBar } = useContext(CoffeeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("CoffeeBar: Initial render before data")
        getCoffeeBar()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("CoffeeBar: Coffee Bar state changed")
        console.log(coffees)
    }, [coffees])

    return (
        <div className="coffees">
        {
            coffees.map(coffee => <Coffee key={coffee.id} coffee={coffee} />)
        }
        </div>
    )
}