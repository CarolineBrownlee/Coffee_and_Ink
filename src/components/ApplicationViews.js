import React from "react"
import { Route } from "react-router-dom"
import { CoffeeProvider } from "./coffee/CoffeeProvider"
// import { Home } from "./home/homepage"
import { CoffeeBar } from "./coffee/CoffeeBar"
// import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = (props) => {
    return (
        <>
            <CoffeeProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/coffee">
                    <CoffeeBar />
                </Route>
            </CoffeeProvider>

            <CoffeeProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/coffee">
                    <CoffeeBar />
                </Route>
            </CoffeeProvider>

            {/* <AnimalProvider> */}
                {/* Render the animal list when http://localhost:3000/animals */}
                {/* <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider> */}
        </>
    )
}