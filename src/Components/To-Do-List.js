import React, { Component } from 'react'

class List extends Component{
    render(){
        return(
            <div className='list-container'>
                <ul className="list">
                    {this.props.lists.map((list, index) => {
                        return <ol key={index}>{list}<button>delete</button></ol>
                    })}
                </ul>
            </div>
        )
    }
}

export default List