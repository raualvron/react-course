import React, { Component } from 'react'
import './App.css'
import Persons from '../components/Persons/Persons'
import Person from '../components/Persons/Person/Person'
import styled from 'styled-components'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'
import classes from './App.css'
import AuthContext from '../context/auth-content'

// import Radium, { StyleRoot } from 'radium'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[Apps.js] constructor');
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changedCounter: 0,
      authenticated: false

    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Apps.js] getDerivedStateFromProps');
  //   return state;
  // }

  componentWillMount() {
    console.log('[Apps.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[Apps.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[Apps.js] componentDidUpdate');
  }

  shouldComponentUpdate() {
    console.log('[Apps.js] shouldComponentUpdate');
    return true;
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

    // Dont finish inmediatlyand don't guarantee it has the last update
    // Don't use
    // this.setState({ persons: persons, changedCounter: this.state.changedCounter + 1 })
    this.setState((prevState, props) => { return { persons: persons, changedCounter: prevState.changedCounter + 1 } })

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

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[Apps.js] render');
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
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated} />
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
      // UseEffect triggering...
      <WithClass classes={classes.App}>
        <button onClick={() => { this.setState({ showCockpit: false }) }}> Remove Cockpit</button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          {this.state.showCockpit ? (
            <Cockpit
              appTitle={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </WithClass>
      // </StyleRoot>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App)
// export default withClass(App, classes.App)
export default App
