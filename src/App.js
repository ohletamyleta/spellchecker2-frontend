import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import SpellsPage from './containers/SpellsPage';
import SpellForm from './components/SpellForm';
import Home from './components/Home';



const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
};


class App extends Component {

  render() {

    return (
  <Router>
    <div>
      <NavBar />
      <Header />

      <Switch>
        <Route exact path='/'component={Home}/>
        <Route path='/spells' component={SpellsPage}/>
        <Route path='/spell/new' component={SpellForm}/>
      </Switch>
     </div>
  </Router>

    )
}};

export default App;
