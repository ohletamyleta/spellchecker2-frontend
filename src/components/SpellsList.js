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




// import SingleSpell from '../containers/SingleSpell';

// function SpellsList(spells) {
//   console.log(spells);
// // const allSpells = props.spells;
// // const spellItems = spells.map((spell) => <li>{spell.name} {spell.desc} {spell.level}</li>
// return (
//   <div>
//     <h2>Spell Scroll Library</h2>
  
//   </div>
// );
// }

// export default SpellsList;