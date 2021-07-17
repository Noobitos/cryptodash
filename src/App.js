import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import AppLayout from './Components/AppLayout';
import AppBar from './Components/AppBar';
import {AppProvider} from './Components/AppProvider';
import Settings from './Settings';
import Content from './Shared/Content'

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
        <Content>
          <Settings/>
        </Content>
      </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
