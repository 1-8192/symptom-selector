import React, { Component } from 'react'

class Selector extends Component {
    state = {
        symptoms: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/symptoms')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                symptoms: data
            })
        })
    }

    render(){
        return (
            <div>
                <h2> Please select your symptoms </h2>
            </div>
        )
    }
}

export default Selector