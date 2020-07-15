import React from 'react'
import Person from './Person.css'
import styled from 'styled-components'

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

const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px',
  //   },
  // }

  return (
    // <div className="person-block">
    // <div className="person-block" style={style}>
    <StyleDiv>
      <p onClick={props.click} className="App-intro">
        I'm a {props.name} and I'm {props.age}
      </p>
      <p className="App-intro">{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
      {/* </div> */}
    </StyleDiv>
  )
}

export default person
