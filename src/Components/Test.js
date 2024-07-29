import React, { Component } from 'react'

export default class Test extends Component {

    constructor() {
        super()

        this.state = {
            name: "Shourya",
            age: 21,
            books: ['a','b','c']
        }
    }

    change=()=>{
        this.setState({
            ...this.state,
            name:'manikanta',
        })
    }

    render() {
        return (
            <div>{this.state.name}
            {/* {this.state.books[0]} */}
                <button onClick={this.change}>change</button>
            </div>
    
        )
    }
}

