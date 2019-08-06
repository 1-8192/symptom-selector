import React, { Component } from 'react'

class Selector extends Component {
    state = {
        symptoms: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/symptoms')
        .then(response => response.json())
        .then(data => {
            this.setState({
                symptoms: data
            })
        })
    }

    render(){
        return (
            <div>
                <h2> Please select your symptoms </h2>
                <p>{this.state.symptoms[0].name}</p>
            </div>
        )
    }
}

export default Selector