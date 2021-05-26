import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SingleSpell = (props) => {
  let { spell } = props;

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
            <Link key={spell.id} spell={spell} to={`/spell/${spell.id}`}>
              More Details
            </Link>
          </em>
        </h4>
      </div>
    </div>
  );
}


   export default SingleSpell;