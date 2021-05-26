import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SpellDetail from '../components/SpellDetail';

const SingleSpell = (props) => {
  let { spell } = props;
// console.log(spell);
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
            <Link key={spell.id} spell={props} to={`/spell/${spell.id}`}>
              More Details
            </Link>
          </em>
        </h4>
      </div>
    </div>
  );
}


   export default withRouter(SingleSpell);