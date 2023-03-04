"use client"
// import react, { useState, useRef } from "react";


// const HeroSection = () => {
//     const [ todos, setTodos ] = useState([])
//     const myref = useRef()

//     function submitted(e) {
//         e.preventDefault()
//         const value = myref.current.value
//         setTodos(prev => { return [...prev, value]})
//         myref.current.value = ""
//     }
//     return (
//         <div className="flex flex-col items-center box-border p-0 m-0 py-36">
//             <div className="">
//                 <h1 className=" font-semibold text-3xl pb-4">Hello Welcome to my App</h1>
//             </div>
//             <form className="items-center flex align-middle " onSubmit={submitted}>
//                 <input ref={myref} className="border mx-3 border-slate-800" type="text"/>
//                 <button className=" bg-slate-400 rounded-full w-8 text-center items-center justify-center align-middle h-auto cursor-pointer text-2xl " type="submit">+</button>
//             </form>
//             <ul className=" border-slate-500 rounded w-2/3 h-auto">
//                 {todos.map(todo => (
//                     <ol>{todo}</ol>
//                 ))}
//             </ul>
//             <form>
//                 <input type="file"/>
//             </form>
//         </div>
//     )
// }

// export default HeroSection
'use client'
import React, { useState, useRef } from 'react'
import Peoples from './peoples'
import Image from 'next/image'

const HeroSection = () => {
    const inputref = useRef()
    const imageRef = useRef()
    const inputInfo = useRef()
    const [ todo, setTodo ] = useState([])
    function handleSubmit (e) {
        e.preventDefault()
        const value = inputref.current.value
        setTodo(prev => {return [...prev, value]})
        inputref.current.value = ""
    }
    function changePic () {
        imageRef.current.src = URL.createObjectURL(inputInfo.current.files)
    }
   return (
    <div className='py-36 gap-4 flex align-middle items-center flex-col'>
        <div>
            <h1>Welcome</h1>
        </div>
        <div className='border dark:drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]'>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <input type="text" className='border border-cyan-900 shadow-lg' ref={inputref}/>
                <button type='submit' className='font-semi-bold rounded cursor-pointer' >Add to list</button>
            </form>
            <div>
                {todo.map((whatodo) => (
                    <ol>
                        {whatodo}
                    </ol>
                ))}
            </div>
        </div>
        <Peoples />
        <img src='#' id='imageup' className='w-52 h-44' ref={imageRef} />
        <label className='cursor-pointer'>
            <input type='file' accept='image.jpeg, image/pjg, image/png' ref={inputInfo} className=' hidden' onChange={changePic} />
            Change Your Picture
        </label>
        
    </div>
  )
}

export default HeroSection


