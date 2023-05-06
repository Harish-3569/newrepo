import React, { Component } from 'react';
//import './Signup.css';
import axios from 'axios'

class Put extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phone_number:'',
        amount:'',
        age: '',
        name:''
    };
  }

  handlephone_numberChange = (event) => {
    this.setState({  phone_number: event.target.value });
  };

  handleamountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleageChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handlenameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        phone_number: this.state.phone_number,
        amount: this.state.amount,
        age: this.state.age,
        name: this.state.name
        
      };
    
      axios.put('http://127.0.0.1:8080/updateDetails', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">phone_number</label>
        <input
          className="sign-input"
          type="number"
          value={this.state.phone_number}
          onChange={this.handlephone_numberChange}
        />


        <label className="sign-label">amount</label>
        <input
          className="sign-input"
          type="number"
          value={this.state.amount}
          onChange={this.handleamountChange}
        />
        <label className="login-label">age</label>
        <input
          className="login-input"
          type="number"
          value={this.state.age}
          onChange={this.handleageChange}
        />
        <label className="sign-label">name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.name}
          onChange={this.handlenameChange}
        />

        
        <button className="button-87" type="submit">
          Credit
        </button>
      </form>
    );
  }
}

export default Put;
