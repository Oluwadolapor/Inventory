import React, { Component } from 'react'

class List extends Component{
    deleteList = () => {

    }
    render(){
        return(
            <div className='list-container'>
                <form>
                <ul className="listClass">
                    {this.props.lists.map((list, index) => {
                        return <ol className="list" key={index}>{list}</ol>
                    })}
                </ul>
                </form>
                
            </div>
        )
    }
}

export default List