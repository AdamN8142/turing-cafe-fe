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

    handleChange = () => {

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
          ></input>
          <input></input>
          <input></input>
          <input></input>
          <button>SUBMIT</button>
        </form>
      </div>

    )
  }
}

export default ResForm;