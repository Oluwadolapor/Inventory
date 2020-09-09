import React, { Component } from 'react'

class Form extends Component {
    render(){
        return(
            <form>
                <input type="text"/>
                <button type="submit">
                <i class= "fas fa-plus-square "></i>
                </button>
            </form>
        )
    }
}

export default Form