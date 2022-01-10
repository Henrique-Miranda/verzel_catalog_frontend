import React from "react"
import ListModules from "./ListModules"
import LoginForm from "./LoginManager"

export default function App(){
    return (
    <div className="App">
        <LoginForm/>
        <ListModules />
    </div>
    )
}