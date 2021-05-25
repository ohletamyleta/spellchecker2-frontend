//I provide a map over the selected spell, and show ALLLLL of the attributes
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

 
  
 
 

const SingleSpell = ({
  spell: {
    name,
    desc,
    higher_level,
    range,
    components,
    material,
    ritual,
    duration,
    concentration,
    casting_time,
    level,
    level_int,
    school,
    dnd_class,
    archetype,
    circles,
  },
  spell,
  match,
}) => (
  <div className='SpellCard'>
    <h4>{spell.name}</h4>
    <p>{spell.desc}</p>
    <p>{spell.level}</p>
    

  </div>
);


export default withRouter(SingleSpell);