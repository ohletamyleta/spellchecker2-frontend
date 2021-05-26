import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getSpells } from '../components/services';

const SpellDetail = () => {

  const [spells, setSpells] = useState([]);
  const params = useParams();
  

  useEffect(() => {
    let mounted = true;
    getSpells()
      .then(spells => {
        if(mounted) {
          setSpells(spells)
        }
      })
      return () => mounted = false;
  }, [])

  console.log(spells);





  return (
    <div className="detail-card">
    {spells.data.filter(spell => spell.data.id === params).map(filteredSpell =>
    <li>{filteredSpell.name}</li>)}
      <h2> THERE!</h2>
      
    </div>


  );
 }


export default SpellDetail;

 