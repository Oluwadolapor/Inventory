import React, { Component } from 'react'

class Form extends Component {
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input  type="text" />
                <button type="submit">
                <i className= "fas fa-plus-square "></i>
                </button>
            </form>
        )
    }
}

export default Form