import React, { Component } from 'react';
import './css/App.css';
import Routes from './js/routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;