import React, { Component } from 'react';


import SingleSpell from '../containers/SingleSpell';

function SpellsList(spells) {
  console.log(spells);

  const SpellList = () => (
    <ol>
      {spells.map(spell => (
        <li key={spell.id}>
          <div>{spell.id}</div>
          <div>{spell.name}</div>
          <div>{spell.desc}</div>
        </li>
      ))}
    </ol>
  );

return (
  <div>
    <h2>Spell Scroll Library</h2>
    <SpellsList />
  </div>
);
}
export default SpellsList;