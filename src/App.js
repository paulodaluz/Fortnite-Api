import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AcessDenied from './pages/AccessDenied/AcessDenied'

//Components
import Header from './components/Moleculas/Header/Header';
import Footer from './components/Moleculas/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/acessDenied" component={AcessDenied} />
            <Route path="*" component={Home} />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    )
  }
}
