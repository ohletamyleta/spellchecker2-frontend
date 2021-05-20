import React, { Component } from 'react';

import SingleSpell from '../containers/SingleSpell';


const SpellsList = ({ spells}) => (

  render() {
return (
  
  <div>
    <h2>Spell Scroll Library</h2>
    <div className="row">
      {spells
      .map(spell => (
        <SingleSpell
          key={spell.id}
          spell={spell}
          />
      ))}
    </div>
    

  </div>
)
  
}

);

export default SpellsList;