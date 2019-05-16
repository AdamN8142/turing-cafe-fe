import React, { Component } from 'react';
import ResForm from './ResForm'
import ResContainer from './ResContainer'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }
  
  componentDidMount = () =>  {
    this.fetchReservations();
  }


  fetchReservations = () => {
    const url = 'http://localhost:3001/api/v1/reservations';
    fetch (url)
    .then(response => response.json())
    .then(data => this.setState({
        reservations: data
    }))
    
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <ResForm />
          <ResContainer reservations = {this.state.reservations}/>
      </div>
    )
  }
}

export default App;
