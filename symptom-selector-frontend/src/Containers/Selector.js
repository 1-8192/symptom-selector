import React, { Component } from 'react'

class Selector extends Component {
    state = {
        symptoms: [],
        diagnosis: ""
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
        fetch(`http://localhost:3000/symptoms/${event.target.value}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                diagnosis: data
            })
        })
    }

    render(){
        return (
            <div>
                <h2> Please select your symptoms: </h2>
                <select onChange={this.handleSelect} value={this.state.selectedValue}>
                    {this.state.symptoms.map(symptom => <option key={symptom.id} value={symptom.id}>{symptom.name}</option>)}
                </select>
                <h2>Recommended Diagnosis:</h2>
                {
                    (this.state.diagnosis !== "") ? 
                <p>{this.state.diagnosis.name}</p> : <p>Please select a symptom</p>}
            </div>
        )
    }
}

export default Selector