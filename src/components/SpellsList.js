import React from 'react';
import { Link, withRouter } from 'react-router-dom';



const SpellsList = ({ spells, fallback, match }) => {

  // console.log(spells);

  if (!spells || !spells.data.length ) {
    return fallback;
  } else {
    console.log(spells);
  
  return spells.data.map((spell, index) => {

    return (
      <div>
        <div className='SpellCard'>
          <h2 key={spell.id}>{spell.attributes.name}</h2>
          <p>{spell.attributes.desc}</p>
          <p>
            <strong>{spell.attributes.level}</strong>
          </p>
          <h4>
            <em>
              <Link key={spell.id} to={`/spell/${spell.id}`}>More Details</Link>
            </em>
          </h4>
        </div>
      </div>
    );




});
  }

  }


export default withRouter(SpellsList);
