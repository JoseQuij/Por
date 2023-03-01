import React from 'react'
import useStore  from './store'

const peoples = () => {
    const people = useStore(state => state.people)
  return (
    <div>
        <h1>We have: {people.length} people in the database</h1>
        <ul>{people.map(e => (<li>{e}</li>))}</ul>
    </div>
  )
}

export default peoples