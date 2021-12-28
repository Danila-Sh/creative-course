import React from "react";

class ClassCounter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    increment () {
        this.setState({likes: this.state.likes + 1})
    }


    decrement () {
        this.setState({likes: this.state.likes - 1})
    }


    render(){
        return (
            <div>
            <h1>{this.state.likes} </h1>
            <button onClick={this.decrement}>Уменьшить</button>
            <button onClick={this.increment}>Увеличить</button>
        </div>
        )
    }
}

export default ClassCounter;