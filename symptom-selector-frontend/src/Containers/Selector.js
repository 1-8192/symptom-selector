import React, { Component } from 'react'

class Selector extends Component {
    state = {
        symptoms: [],
        selectedValue: ""
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

    handleSelect = (event) => {
        this.setState({
            selectedValue: event.target.value
        })
        console.log(event.target.value)
    }

    render(){
        return (
            <div>
                <h2> Please select your symptoms: </h2>
                <select onChange={this.handleSelect} value={this.state.selectedValue}>
                    {this.state.symptoms.map(symptom => <option key={symptom.id} value={symptom.name}>{symptom.name}</option>)}
                </select>
            </div>
        )
    }
}

export default Selector