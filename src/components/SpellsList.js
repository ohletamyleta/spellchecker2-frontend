import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleSpell from './SingleSpell';

const SpellsList = (spells)=> (



  <div>
   <h2>Spell Scroll Library</h2>
   <div className="row">
     {Spells
     .map(spell => (
       <SingleSpell
       key={spell.id}
       spell={spell}
       />
     ))}
   </div>
  </div>
  );


export default SpellsList;