import React, { Component } from 'react'

class Selector extends Component {
    state = {
        symptoms: [],
        diagnoses: [],
        diagnosis_solved: ""
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
        if (event.target.value === 'yes') {
            fetch(`http://localhost:3000/diagnoses/${event.target.dataset.diagnosis}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                frequency: ++event.target.dataset.freq
            })
        })
            this.setState({
                diagnosis_solved: true
            })
            alert('Thank you! Hope you feel better!')
        } else if (event.target.value === 'no') {
            this.setState({
                diagnosis_solved: false
            })
        }
    }

    handleDiagnosisClick = (event) => {
        fetch(`http://localhost:3000/diagnoses/${event.target.value}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                frequency: ++event.target.dataset.test
            })
        })
        this.setState({
            diagnosis_solved: true
        })
    }

    handleClearClick = () => {
        this.setState({
            symptoms: [],
            diagnoses: [],
            diagnosis_solved: ""
        })
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
                    <button onClick={this.handleClearClick}>Start over</button>
                    <h2> Please select your symptoms: </h2>
                        <select onChange={this.handleSelect} value={this.state.selectedValue}>
                        <option value="blank">Please select</option>
                        {this.state.symptoms.map(symptom => <option key={symptom.id} value={symptom.id}>{symptom.name}</option>)}
                     </select>
                    <h2>Recommended Diagnosis:</h2>
                    {
                        (this.state.diagnoses.length > 0) ? 
                    <div>
                        <p>{this.state.diagnoses[0].name}</p>
                        <p>Are you happy with our diagnosis?</p>
                        <button onClick={this.handleClick}value="yes" data-diagnosis={this.state.diagnoses[0].id} data-freq={this.state.diagnoses[0].frequency}>Yes</button>
                        <button onClick={this.handleClick}value="no">No</button>
                    </div> : <p>Please select a symptom</p>}
                    {
                        (this.state.diagnosis_solved === true) ? 
                        this.state.diagnoses.map(diagnosis => <p>{diagnosis.name} | {diagnosis.frequency} cases</p>) : 
                        (this.state.diagnosis_solved === false) ?
                        <div>
                            <h2>Please pick another diagnosis</h2>
                            {this.state.diagnoses.map(diagnosis => <button onClick={this.handleDiagnosisClick} value={diagnosis.id} key={diagnosis.id} data-test={diagnosis.frequency}>{diagnosis.name}</button>)}
                        </div> : null
                    }
                </div>
        )
    }
}

export default Selector