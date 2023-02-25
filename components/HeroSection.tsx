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
        <div className="flex flex-col items-center box-border p-0 m-0 py-36">
            <div className="">
                <h1 className=" font-semibold text-3xl pb-4">Hello Welcome to my App</h1>
            </div>
            <form className="items-center flex align-middle " onSubmit={submitted}>
                <input ref={myref} className="border mx-3 border-slate-800" type="text"/>
                <button className=" bg-slate-400 rounded-full w-8 text-center items-center justify-center align-middle h-auto cursor-pointer text-2xl " type="submit">+</button>
            </form>
            <ul className=" border-slate-500 rounded w-2/3 h-auto">
                {todos.map(todo => (
                    <ol>{todo}</ol>
                ))}
            </ul>
            <form>
                <input type="file"/>
            </form>
        </div>
    )
}

export default HeroSection


