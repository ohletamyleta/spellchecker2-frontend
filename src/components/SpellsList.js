import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleSpell from '../containers/SingleSpell';

function SpellsList(spells) {
  console.log(spells);

  return (
   <h2>Spell Scroll Library</h2>

  );

//   class SpellsList extends Component {

//     constructor(props) {
//       super(props);

//       this.state = {
//         spells: [],
//       };
//     }


//   render() {
// return (
//   <div>
//     <div className='Title'>
//       <h2>Spell Scroll Library</h2>
//     </div>
//     <div className='spells'>
//       {this.state.spells.map((spell) => (
//         <SingleSpell
//           name={spell.name}
//           desc={spell.desc}
//           level={spell.level}
//           key={spell.id.value}
//           />
//       ))}
//     </div>
//   </div>
// );
// }
 }

export default SpellsList;