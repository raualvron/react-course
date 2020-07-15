import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './Person/Person'

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Stephan', age: 32 },
    ],
    otherState: 'value',
    showPersons: false,
  })

  const switchNameHandler = (name) => {
    //DON'T DO THIS: personsState.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { id: '1', name: name, age: 28 },
        { id: '2', name: 'Stephan 2', age: 32 },
      ],
      otherState: personsState.otherState,
    })
  }

  const deletePersonHandler = (index) => {
    const personsIndex = personsState.persons
    personsIndex.splice(index, 1)
    setPersonsState({ ...personsState, persons: personsIndex })
  }

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return parseInt(p.id, 10) === parseInt(id, 10)
    })

    const person = { ...personsState.persons[personIndex] }
    // const person = Object.assign({}, personsState.persons[personIndex])

    person.name = event.target.value
    const persons = [...personsState.persons]
    persons[personIndex] = person

    setPersonsState(...personsState, { persons: persons, showPersons: true })
  }

  const togglePersonsHandler = () => {
    const doesShow = !personsState.showPersons
    setPersonsState({ ...personsState, showPersons: doesShow })
  }

  const styleInline = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid grey',
    padding: '8px',
  }

  let person = null

  if (personsState.showPersons) {
    person = (
      <div className="persons">
        {personsState.persons.map((person) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              // click={deletePersonHandler}
              changed={(event) => nameChangedHandler(event, person.id)}
              key={person.id}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button style={styleInline} onClick={togglePersonsHandler}>
        Switch name
      </button>
      {person}
    </div>
  )
}
export default app
