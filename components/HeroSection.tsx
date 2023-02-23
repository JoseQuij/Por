"use client"
import react, { useState, useRef } from "react";


const HeroSection = () => {
    const [todos, setTodos ] = useState([])
    const myref = useRef()

   
    function submited(e) {
        e.preventDefault()
        const value = myref.current.value
        setTodos(prev => { return [...prev,value]})
        myref.current.value = ""
    }
    return (
        <div className="py-44">
            <h2 className="bold text-4xl">MY to do app</h2>
            <form onSubmit={submited}>
                Add to do:<input className="border border-slate-600" type="text" ref={myref} />
                <button type="submit">+</button>
            </form>
            <div>{todos.map((wt,idx)  => (
                <div id="idx">{wt}</div>
            ))}</div>
        </div>
    )
}

export default HeroSection