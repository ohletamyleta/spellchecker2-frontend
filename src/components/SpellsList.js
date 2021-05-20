import React, { Component } from 'react';

import SingleSpell from '../containers/SingleSpell';

function SpellsList(spells) {

// const allSpells = props.spells;
const spellItems = spells.map((spell) => <li>{spell.name} {spell.desc} {spell.level}</li>
);
return (
  <div>
    <h2>Spell Scroll Library</h2>
    <ol>{spellItems}</ol>
  </div>
);
}
export default SpellsList;