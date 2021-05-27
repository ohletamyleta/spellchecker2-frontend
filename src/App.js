import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import SpellsPage from './containers/SpellsPage';
import SpellForm from './containers/SpellForm';
import SpellDetail from './containers/SpellDetail';
import Home from './components/Home';



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
        <Route path='/spell/:id' component={SpellDetail}/>
      </Switch>
     </div>
  </Router>

    )
}};

export default App;
