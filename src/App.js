import React, { Component } from 'react';
import './App.css';
import RouterWrap from './router';
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterWrap />
      </div>
    );
  }
}

export default App;