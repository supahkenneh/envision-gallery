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
import PhotoPage from './components/photoPage';

import { connect } from 'react-redux';
import { checkUser } from './actions/userActions';
class App extends Component {
  componentDidMount() {
    this.props.checkUser()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar user={this.props.user} />
        <Switch>
          <Route exact={true} path="/" component={Body} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path={`/photo/:id`} component={PhotoPage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { checkUser }, null, { pure: false })(App);
