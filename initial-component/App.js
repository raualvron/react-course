import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './Person/Person'

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Stephan', age: 32 },
    ],
    otherState: 'value',
  })

  const switchNameHandler = (name) => {
    //DON'T DO THIS: personsState.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: name, age: 28 },
        { name: 'Stephan 2', age: 32 },
      ],
      otherState: personsState.otherState,
    })

    console.log(personsState)
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Stephan', age: 32 },
      ],
      otherState: personsState.otherState,
    })
  }

  const styleInline = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid grey',
    padding: '8px',
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
      <button
        style={styleInline}
        onClick={switchNameHandler.bind(this, 'Name1')}
      >
        Switch name
      </button>
      <div class="persons">
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
          click={switchNameHandler.bind(this, 'Name2')}
          changed={nameChangedHandler}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          onClick={() => this.switchNameHandler('Name3')}
          changed={nameChangedHandler}
        />
      </div>
    </div>
  )
}
export default app
