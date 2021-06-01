
import React from 'react';

import SingleSpell from '../components/SingleSpell';





const SpellsList = ({ spells, fallback, match }) => {


  if (!spells || !spells.data.length ) {
    return fallback;
  } else {
  console.log(spells);
 


  return spells.data.map((spell, index) => {
  return <SingleSpell spell={spell} key={spell.id} />;
});
  }
  }



export default SpellsList;



