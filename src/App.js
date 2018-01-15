import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dash from './containers/dash';

class App extends Component {
  render() {
    return (
      <div className="dash">
        <Dash />
      </div>
    );
  }
}

export default App;
