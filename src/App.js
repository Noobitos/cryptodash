import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/WelcomeMessage'
import styled, {css} from 'styled-components'
import AppLayout from './Components/AppLayout'
import AppBar from './Components/AppBar'
import {AppProvider} from './Components/AppProvider'
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
        <AppProvider>
        <AppBar/>
      <Welcome name={'Appazen'}/>
      </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
