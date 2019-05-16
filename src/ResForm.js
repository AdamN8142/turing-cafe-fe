import React, { Component } from 'react'

class ResForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numGuests: ''
    }
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })

    }

    handleSubmit = () => {

    }



  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input
            type = 'text'
            onChange = {this.handleChange}
            name = 'name'
            value = {this.state.value}
            placeholder= 'Name'
          >
          </input>


          <input
            type = 'text'
            onChange = {this.handleChange}
            name = 'date'
            value = {this.state.date}
            placeholder= 'Date'
          
          ></input>
          <input
             type = 'text'
             onChange = {this.handleChange}
             name = 'time'
             value = {this.state.time}
             placeholder= 'Time'
          ></input>

          <input
            type= 'text'
            onChange = {this.handleChange}
            name= 'guests'
            value = {this.state.numGuests}
            placeholder ='Number of Guests'
          
          
          ></input>
          <button>SUBMIT</button>
        </form>
      </div>

    )
  }
}

export default ResForm;