import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Components/Form'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <h1>To-Do List</h1>
        <Form/>
      </div>
    )
  }
}

export default App;
