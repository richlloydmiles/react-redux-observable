import React, { Component } from 'react';
// import Stories from './components/Stories-Basic-Observer/Stories';
import Stories from './components/Stories-With-Ajax/Stories';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stories />
      </div>
    );
  }
}

export default App;
