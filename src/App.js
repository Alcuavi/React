import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return <div onClick={() => this.increment()}>Pulsame -> {this.state.count} </div>
    }
}

export default App;