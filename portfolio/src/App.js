import React, { Component } from 'react';
import './App.css';
import Hero from "./Components/Hero"
import HImage from "./Pictures/heroimage.jpg"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Hero backgroundImage={HImage}></Hero>
        </div>
        <div>This is a test</div>
      </div>
    );
  }
}

export default App;
