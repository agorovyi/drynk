import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Welcome to the Opencare Front End Challenge!</h1>
        </header>
        <div className="intro">
          <span>To get started:</span>
          <ul>
            <li>Ensure <a href="http://localhost:1337/api/items" target="_blank" rel="noopener noreferrer">http://localhost:1337/api/items</a> is working.</li>
            <li>Edit <code>src/App.js</code> & <code>src/App.scss</code> then save to reload and see your changes.</li>
            <li>Got a question? Ask <a href="mailto:dave@opencare.com?subject=Opencare%20Front-End%20Challenge%20Question">dave@opencare.com</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
