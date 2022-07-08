import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
    state = {
        operand1: '',
        operand2: '',
        operation: '+',
    };

    render() {
        return (
          
            <div>
            <h3>CALCULATOR</h3>
                <br />
                <input
                    name="operand1"
                    value={this.state.operand1}
                    onInput={this.onInputChange}
                />

                <select
                    name="operation"
                    value={this.state.operation}
                    onChange={this.onInputChange}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>

                <input
                    name="operand2"
                    value={this.state.operand2}
                    onInput={this.onInputChange}
                />
                =<strong>{this.result()}</strong>
            </div>
        );
    }


    onInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        this.result();
    };

    result = () => {
      const a = +this.state.operand1;
      const b = +this.state.operand2;

      if (isNaN(a) === true || isNaN(b) === true) {
          return 'only 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 are allowed'
      }

      switch (this.state.operation) {

          case '+': return (a + b);
          case '-': return (a - b);
          case '*': return (a * b);
          case '/': if (b===0) { return `It is forbidden to divide by zero`} else { return (a / b) }

          default: return 'Something went wrong. Reload the page.'

        }
    }
}

