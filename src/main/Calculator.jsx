import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <h1>Hello World!</h1>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}
