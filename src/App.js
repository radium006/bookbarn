import React, { Component } from 'react';

import './App.css';
import Header from './components/header.js'
import Books from './components/books.js'


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Books />
        </div>
      </div>
    );
  }
}

export default App;
