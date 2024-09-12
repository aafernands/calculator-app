import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log("clean");
  }

  setOperation() {
    console.log("operation");
  }

  addDigit(n) {
    console.log(n);
  }

  render() {
    return (
      <div className="calculator">
        <Display value={100} />
        <Button label="AC" onClick={this.clearMemory} double />
        <Button label="%" />
        <Button label="/" onClick={() => this.setOperation('/')} operation />
        <Button label="7" onClick={() => this.addDigit('7')} />
        <Button label="8" onClick={() => this.addDigit('8')} />
        <Button label="9" onClick={() => this.addDigit('9')} />
        <Button label="*" onClick={() => this.setOperation('*')} operation />
        <Button label="4" onClick={() => this.addDigit('4')} />
        <Button label="5" onClick={() => this.addDigit('5')} />
        <Button label="6" onClick={() => this.addDigit('6')} />
        <Button label="-" onClick={() => this.setOperation('-')} operation />
        <Button label="1" onClick={() => this.addDigit('1')} />
        <Button label="2" onClick={() => this.addDigit('2')} />
        <Button label="3" onClick={() => this.addDigit('3')} />
        <Button label="+" onClick={() => this.setOperation('+')} operation />
        <Button label="0" onClick={() => this.addDigit('0')} double/>
        <Button label="." onClick={() => this.addDigit('.')} />
        <Button label="=" onClick={() => this.setOperation} operation/>
      </div>
    );
  }
}
