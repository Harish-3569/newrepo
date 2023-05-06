
import axios from "axios";
import React, { Component } from "react";

class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <table border={1}>
        <thead>
          <tr>
            <th>phone_number</th>
            <th>amount</th>
            <th>age</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(user => (
            <tr key={user.phone_number}>
              <td>{user.phone_number}</td>
              <td>{user.amount}</td>
              <td>{user.age}</td>
              <td>{user.name}</td>
            </tr>
           
          ))}
        </tbody>
      </table>
    );
  }}
  
export default Get;