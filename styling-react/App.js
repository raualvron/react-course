import React, { Component } from 'react'
import classes from './App.css'
import Person from './Person/Person'

// import styled from 'styled-components'
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      )

      style.backgroundColor = '#ccc'
      style[':hover'] = {
        backgroundColor: 'lightblue',
        color: 'black',
      }
    }

    // let classes = ['red', 'bold'].join(' ')

    // const classes = []
    // if (this.state.persons.length <= 2) {
    //   classes.push('red')
    // }

    // if (this.state.persons.length <= 1) {
    //   classes.push('bold')
    // }

    const asignedClasses = []
    if (this.state.persons.length <= 2) {
      asignedClasses.push(classes.red)
    }

    if (this.state.persons.length <= 1) {
      asignedClasses.push(classes.bold)
    }

    // const StyledButton = styled.button`
    //   background-color: ${(props) => (props.alt ? 'black' : 'green')};
    //   color: white;
    //   font: inherit;
    //   border: 1px solid blue;
    //   padding: 8px;
    //   cursor: pointer;

    //   &:hover {
    //     background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
    //   }
    // `

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={asignedClasses.join(' ')}>This is really working!</p>
        {/* <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton> */}
        <button
          className={classes.button}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
      // </StyleRoot>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App)
export default App
