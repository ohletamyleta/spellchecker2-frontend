import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpells } from '../components/services';

const SpellDetail = () => {

  const [spells, setSpells] = useState([]);
  // const params = useParams();
  const useParamsInt = (key = 'id') => {
    const params = useParams();
    return params[key] ? parseInt(params[key]) : null;
  };

  const spellId = useParamsInt();


  useEffect(() => {
    let mounted = true;
    getSpells()
      .then(spells => {
        if(mounted) {
          setSpells([spells.spells])
        }
      })
      return () => mounted = false;
  }, [])

  

  console.log(spellId);

  function findSpell(spellId) {
    return spells.data.filter(spell => {
      return spell.id === spellId
    })
  };

  return (
    <div className="detail-card">
    
      <h2>OY!{findSpell()}</h2>
      
    </div>


  );
 }


export default SpellDetail;

 