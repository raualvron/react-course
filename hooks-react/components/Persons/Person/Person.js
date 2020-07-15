import React, { Component } from 'react'
import PersonCSS from './Person.css'
import styled from 'styled-components'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-content'

const StyleDiv = styled.div`
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
  width: 20%;
  padding: 15px;
  margin: 20px 15px 0px 15px;
  /* margin: 0 auto; */
  display: inline-block;
`

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // ContentType
  static contextType = AuthContext;

  componentDidMount() {
    // document.querySelector('input').focus()
    // this.inputElement.focus();
    this.inputElementRef.current.focus()
  }


  render() {
    return (
      // The same like Aux component
      // <React.Fragment>
      <Aux>
        {/* <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated</p> : <p>Do authenticate</p>}
        </AuthContext.Consumer> */}
        {this.context.authenticated ? <p>Authenticated</p> : <p>Do authenticate</p>}

        {/* <StyleDiv> */}
        <p onClick={this.props.click} className="App-intro">
          I'm a {this.props.name} and I'm {this.props.age}
        </p>
        <p className="App-intro">{this.props.children}</p>
        <input type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElementRef}
        // ref={(inputEl) => this.inputElement = inputEl}
        // ref={(inputEl) => inputEl.focus()}
        >

        </input>
        {/* </div> */}
        {/* </StyleDiv> */}
      </Aux >
      // </React.Fragment> */ }
      // Adjacent elements
      //    return [
      //   <p key="i1" onClick={this.props.click} className="App-intro">
      //     I'm a {this.props.name} and I'm {this.props.age}
      //   </p>,
      //   <p key="i2" className="App-intro">{this.props.children}</p>,
      //   <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}></input>
      // ]
    )
  }
}
// const person = (this.props) => {
// const style = {
//   '@media (min-width: 500px)': {
//     width: '450px',
//   },
// }

// return (
// <div className="person-block">
// <div className="person-block" style={style}>

// )
// }

// Development mode
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person
