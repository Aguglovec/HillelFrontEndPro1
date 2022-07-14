import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
    state = {
        operand1: '',
        operand2: '',
        operation: '+',
        error: ''
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
                =<strong>{this.state.error ? "" : this.result()}</strong>
                <div className="error">{this.state.error}</div>
            </div>
        );
    }

    onInputChange = (e) => {

        if (e.target.name !== "operation" && isNaN(+e.target.value) === true) {
            this.setState({error: 'only 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 are allowed'});

        } else if (e.target.name === "operand2" && +e.target.value === 0 && this.state.operation==="/") { 
            this.setState({error: `It is forbidden to divide by zero`});

        } else if (e.target.name === "operation" && e.target.value === "/" && this.state.operand2 === "0" ) { 
            this.setState({error: `It is forbidden to divide by zero`});

        } else {
            this.setState({
                [e.target.name]: e.target.value,
                error: '',
            });
        }

    };

    result = () => {
        const a = +this.state.operand1;
        const b = +this.state.operand2;

        switch (this.state.operation) {

            case '+': return (a + b);
            case '-': return (a - b);
            case '*': return (a * b);
            case '/': return (a / b);

            default: return 'Something went wrong. Reload the page.'

        }
    }
}

