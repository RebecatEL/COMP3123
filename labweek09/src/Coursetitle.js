import React, { Component } from 'react';

export default class Coursetitle extends Component {
    constructor(props) {
    super(props);
        this.state = {
            extitle: "Week09"
        }
    }
  render() {
    return (
      <div>
            <h1>Welcome to Fullstack Development - I</h1>
            <h2>React JS Programming {this.state.extitle} Lab exercise</h2>
            <h3>{this.props.idprop}</h3>
            <h4>{this.props.nameprop}</h4>
            <h5>George Brown College, Toronto</h5>
      </div>
    )
  }
}

Coursetitle.defaultProps = {
    idprop: "101395302",
    nameprop: "Hiu Wai Lau"
}