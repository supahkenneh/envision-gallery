import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Body from './components/Main/body';
import Register from './components/register';
import Login from './components/login';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact={true} path="/" component={Body} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
