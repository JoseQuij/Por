"use client"

import {useState, useEffect} from 'react'

export default function page() {
  const [ timer, setTimer ] = useState('')
  function timeFormat (e:any) {
    if (e < 10){
      return "0"
    } else {
      return ''
    }
  }

  useEffect(() => {
    const ticker = setInterval(() => flick(), 1000)
     return function rInterval() { clearInterval(ticker)}
  })
  function flick() {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()

    setTimer(timeFormat(h) + h + ":" + timeFormat(m) + m + ":" + timeFormat(s) + s)
  }
  return (
    <div>{timer}</div>
  )
}
