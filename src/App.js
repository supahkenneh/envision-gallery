import React, { Component } from 'react';
import './App.css';

//components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar />
        <Footer />
      </div>
    )
  }
}

export default App;
