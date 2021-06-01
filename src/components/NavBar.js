//I will have a logo/title and two links - spell list, and add a spell
import React from 'react';
import { NavLink } from 'react-router-dom';




const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
};

const NavBar = () => {
  return (

    <div className='text-center'>

      <NavLink
        to='/'
        exact
        style={link}
        activeStyle={{
          background: 'darkgreen',
        }}>
        Home
      </NavLink>

      <NavLink
        to='/spells'
        exact
        style={link}
        activeStyle={{
          background: 'darkgreen',
        }}>
        Spells
      </NavLink>
      <NavLink
        to='/spell/new'
        exact
        style={link}
        activeStyle={{
          background: 'darkgreen',
        }}>
        Add Spell
      </NavLink>
    </div>
  );
};

export default NavBar;