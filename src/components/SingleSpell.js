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
    id,
  },
  spell,
  match,
}) => (
  <div>
    <div className='SpellCard'>
      <h2>{spell.name}</h2>
      <p>{spell.desc}</p>
      <p>{spell.level}</p>
    </div>
    <div className='show-link'>
      <Link to={`${match.url}/${id}`} className='btn'>
        View Details
      </Link>
    </div>
  </div>
);


export default withRouter(SingleSpell);