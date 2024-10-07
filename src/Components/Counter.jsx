


import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    incr = () => {
        this.setState({ value: this.state.value + 1 });
    };

    dec = () => {
        this.setState({ value: this.state.value - 1 });
    };

    reset = () => {
        this.setState({ value: 0 });
    };

    render() {
        return (
            <div className="counter-container">
                <button className="counter-button" onClick={this.dec}>-</button>
                <span className="counter-value">{this.state.value}</span>
                <button className="counter-button" onClick={this.incr}>+</button>
                <button className="counter-button reset-button" onClick={this.reset}>RESET</button>
            </div>
        );
    }
}


