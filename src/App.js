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
    this.deleteList = this.deleteList.bind(this);
  }
  
  handleSubmit = (event) =>{

    event.preventDefault();
    let todo = event.target[0].value;
    if(todo !=''){
      this.setState((prevState) =>{ 
        return {todos: [...this.state.todos, todo]}
      });
    }
    
    event.target[0].value = ''

  }
  deleteList = (event,index) => {
    event.preventDefault();
    const todo = this.state.todos
    todo.splice(index,1) 
    this.setState({todo: [...todo]})
   
  }
  render(){
    return(
      <div className='App'>
       <Header/>
        <Form  handleSubmit={this.handleSubmit}  />
        
        <List lists={this.state.todos} deleteList={this.deleteList}/>
      </div>
    )
  }
}

export default App;
