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
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  updateLogin = (isLoggedIn) => {
    this.setState({ isLoggedIn })
  }

  render() {
    console.log(this.props.loggedIn);
    return (
      <div className="app">
        <Header />
        <Sidebar loggedIn={this.state.isLoggedIn} />
        <Switch>
          <Route exact={true} path="/" component={Body} />
          <Route path="/register" component={Register} />
          <Route
            path="/login"
            render={() => (
              !this.state.isLoggedIn
                ? <Login onRedirect={this.updateLogin} />
                : <div>You are already logged in!</div>
            )} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
