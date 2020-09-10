import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Components/Form'
import Header from './Components/Header'
import List from './Components/To-Do-List'
import './App.css';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos : [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit = (event) =>{
    event.preventDefault();
    let todo = event.target[0].value;
    this.setState((prevState) =>{ 
      return {todos: [...this.state.todos, todo]}
    });
    event.target[0].value = ''
  }
  render(){
    return(
      <div className='App'>
       <Header/>
        <Form  handleSubmit={this.handleSubmit}  />
        
        <List lists={this.state.todos}/>
      </div>
    )
  }
}

export default App;
