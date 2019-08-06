import React, { Component } from 'react'

class Selector extends Component {
    state = {
        symptoms: [],
        diagnoses: []
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
                diagnoses: data
            })
        })
    }

    handleClick = (event) => {
        console.log(event.target.value)
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
                    (this.state.diagnoses.length > 0) ? 
                <div>
                    <p>{this.state.diagnoses[0].name}</p>
                    <p>Are you happy with our diagnosis?</p>
                    <button onClick={this.handleClick}value="yes">Yes</button>
                    <button onClick={this.handleClick}value="no">No</button>
                </div> : <p>Please select a symptom</p>}
            </div>
        )
    }
}

export default Selector