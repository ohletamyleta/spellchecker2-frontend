//I provide a map over the selected spell, and show ALLLLL of the attributes
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

 
  
 
 

const SingleSpell = ({
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
    id,
  }) => {
    return(
  <div>
    <div className='SpellCard'>
      <h2>{SingleSpell.name}</h2>
      <p>{SingleSpell.desc}</p>
      <p>{SingleSpell.level}</p>
    </div>
  </div>
    )
  }


export default withRouter(SingleSpell);