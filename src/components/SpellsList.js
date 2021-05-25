
import React, { Component } from 'react';
import { connect } from 'react-redux';



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
