import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleSpell } from '../components/services';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/spellActions';


import DetailPage from '../components/DetailPage';

const SpellDetail = () => {

  const [spell, setSpell] = useState([]);
 
  const useParamsInt = (key = 'id') => {
    const params = useParams();
    return params[key] ? parseInt(params[key]) : null;
  };

  const spellId = useParamsInt();

  useEffect(() => {
    let isActive=true;

    fetch(`http://localhost:3001/api/v1/spells/${spellId}`)
      .then((data) => data.json())
      .then(data => setSpell(data))
      .catch(error => console.log(error));
    return () => {
        isActive = false;
    }  
  }, []);

// console.log(spell);

 
  return (
    <div className="detail-card">
    
      <h2>OY!</h2>
      <DetailPage spell={spell} />
    </div>


  );
 }


export default SpellDetail;

 