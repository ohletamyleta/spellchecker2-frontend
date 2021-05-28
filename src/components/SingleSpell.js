import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Card from 'react-bootstrap/Card'
import book from '../assets/book.png';



const SingleSpell = (props) => {
  let { spell } = props;

  return (
       <div className="col-md-4 col-12 mt-5 mx-auto">
    <Card>
      <Card.Img variant="top" src={book} alt="icon" />
      <Card.Body>
        <Card.Title>{spell.attributes.name}</Card.Title>
        <Card.Text>{spell.attributes.desc}</Card.Text>
        <Card.Text>
          <small className="text-muted">{spell.attributes.level}</small>
          </Card.Text>
       </Card.Body>
       <Card.Footer> 
          <Link to={`/spell/${spell.id}`}>
              More Details
          </Link>
        </Card.Footer>
        </Card>
    </div>
    
  );
}


   export default withRouter(SingleSpell);

