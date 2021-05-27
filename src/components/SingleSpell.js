import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const SingleSpell = (props) => {
  let { spell } = props;

  return (
    <div>
      <div className='SpellCard'>
        <h2 key={spell.id}>{spell.attributes.name}</h2>
        <p>{spell.attributes.desc}</p>
        <h5>
          <strong>{spell.attributes.level}</strong>
        </h5>
        <h3>
          <em>
            <Link to={`/spell/${spell.id}`}>
              More Details
            </Link>
          </em>
        </h3>
          <br></br>
      </div>
    </div>
  );
}


   export default withRouter(SingleSpell);

