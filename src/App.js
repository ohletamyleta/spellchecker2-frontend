import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import spellsPage from './containers/spellsPage';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
};


const App = () => (
  <Router>
    <div>
      <NavBar />
      <Header />
      <Route
        exact
        path='/'
        render={() => (
          <div id='outer'>
            <div className='text-center' id='inner_fixed'>
              <h1>Welcome to Spellchecker!</h1>
              <h3>What would you like to do?</h3>
              <NavLink to='/spells' className='btn btn-primary margin-right'>
                See All Spells
              </NavLink>
              <NavLink to='/spells/new' className='btn btn-primary'>
                Add a New Spell
              </NavLink>
            </div>
            <div id='inner_remaining' />
          </div>
        )}
      />
    </div>
  </Router>
);

export default App;
