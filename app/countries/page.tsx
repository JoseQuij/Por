"use client"
import React, { useState, useRef} from 'react'


const page = () => {
    const [result, setResult ] = useState("")
    const myref = useRef()
    function Handlesubmit(e) {
      e.preventDefault()
      const country = `https://restcountries.com/v2/name/${myref.current.value}?fullText=true`
      fetch(country).then((res) => res.json()).then((data) => {
        const flag = (data[0].flags.svg)
        const name = (data[0].name.common)

      });
      
      myref.current.value = ""
      }
  return (
    <div className='py-32 w-full px-11 '>
        <div className='absolute w-4/5 px shadow-md content-center min-h-max border-2 border-black bg-teal-600  '>
            <input type="text" ref={myref} className='border px-2 mr-4  border-slate-600' placeholder='Enter country'/>
            <button className='font-semibold rounded-sm' onClick={Handlesubmit}>Search </button> 
          <div >{result}
          </div>
        </div>
    </div>
  )
}

export default page