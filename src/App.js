import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/WelcomeMessage'
import styled, {css} from 'styled-components'
import AppLayout from './Components/AppLayout'
import AppBar from './Components/AppBar'

/*
const MyButton = styled.div`
color: green;
${props => props.primary && css`
    color: palevioletred;
  `}
`
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`; */

/* function App() {
  return (
<div>Hello World !</div>
  );
} */



class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar/>
      <Welcome name={'Appazen'}/>
      </AppLayout>
    );
  }
}

export default App;
