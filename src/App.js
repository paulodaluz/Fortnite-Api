import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AcessDenied from './pages/AccessDenied/AcessDenied';
import Contact from "./pages/Contact/Contact";
import ReceivedMessages from "./pages/ReceivedMessages/ReceivedMessages";
import CharcacterList from "./pages/CharacterList/CharcacterList";
import Errands from "./pages/Errands/Errands";
import ChangeErrands from './pages/ChangeErrands/ChangeErrands';
import Register from './pages/Register/Register';

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
            <Route path="/" exact={true} component={Home} /> {/* Publica */}
            <Route path="/login" component={Login} />{/* Publica */}
            <Route path="/register" component={Register} />{/* Publica */}

            <Route path="/contact" component={Contact} />{/* Publica */}
            <Route path="/receivedMessages" component={ReceivedMessages} />{/* Privada */}

            <Route path="/changeCharacter" component={ReceivedMessages} /> {/* Privada */}
            <Route path="/charcacterList" component={CharcacterList} />{/* Publica */}

            <Route path="/changeErrands" component={ChangeErrands} />{/* Privada */}
            <Route path="/errands" component={Errands} />{/* Publica */}

            <Route path="/acessDenied" component={AcessDenied} />{/* Publica */}
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    );
  }
}
