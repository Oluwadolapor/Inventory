import React, { Component } from 'react'

class List extends Component{
    
    render(){
        return(
            <div className='list-container'>
                <form>
                <ul className="listClass">
                    {this.props.lists.map((list, index) => {
                        return <ol className="list swing" key={index}>{list}
                        {/* <--<button onClick={(e) => this.props.deleteList(e,index)}><i className="fas fa-trash"></i></button>--> */}
                        </ol>

                    })}
                </ul>
                </form>
                
            </div>
        )
    }
}

export default List