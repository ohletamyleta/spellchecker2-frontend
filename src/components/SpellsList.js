import React, {useState} from 'react';
import SingleSpell from './SingleSpell';


const SpellsList = ({ spells, fallback }) => {

  // console.log(spells);

  if (!spells || !spells.data.length ) {
    return fallback;
  } else {
    console.log(spells);
  
  return spells.data.map(({ id, name, desc, level }) => {
  return <SingleSpell id={id} key={id} name={name} desc={desc} level={level} />;
});
  }

  }


export default SpellsList;

//  .data.index.attributes