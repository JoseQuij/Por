"use client"
import react, { useState, useRef } from "react";


const HeroSection = () => {
    const [ todos, setTodos ] = useState([])
    const myref = useRef()

    function submitted(e) {
        e.preventDefault()
        const value = myref.current.value
        setTodos(prev => { return [...prev, value]})
        myref.current.value = ""
    }
    return (
        <div className="py-40">
            <div>
                <h1>Hello Welcome to my App</h1>
            </div>
            <form onSubmit={submitted}>
                <input ref={myref} className="border border-slate-800" type="text"/>
                <button type="submit">+</button>
            </form>
            <div>
                {todos.map(todo => (
                    <p>{todo}</p>
                ))}
            </div>
        </div>
    )
}

export default HeroSection