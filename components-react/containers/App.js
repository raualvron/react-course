import React, { Component } from 'react'
import './App.css'
import Persons from '../components/Persons/Persons'
import Person from '../components/Persons/Person/Person'
import styled from 'styled-components'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit'

// import Radium, { StyleRoot } from 'radium'

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex],
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgrey',
      },
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )

      style.backgroundColor = '#ccc'
      style[':hover'] = {
        backgroundColor: 'lightblue',
        color: 'black',
      }
    }

    // let classes = ['red', 'bold'].join(' ')

    const StyledButton = styled.button`
      background-color: green;
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
    `

    const rnd = Math.random();

    // if (rnd > 0.7) {
    //   throw new Error('Something went wrong');
    // }

    return (
      // <StyleRoot>
      <div>
        <Cockpit appTitle={this.props.appTitle} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler} />
        {persons}
      </div>
      // </StyleRoot>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App)
export default App
