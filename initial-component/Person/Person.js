import React from 'react'
import Person from './Person.css'

const person = (props) => {
  return (
    <div class="person-block">
      <p onClick={props.click} className="App-intro">
        I'm a {props.name} and I'm {props.age}
      </p>
      <p className="App-intro">{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
}

export default person
