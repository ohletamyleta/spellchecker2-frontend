import React from 'react';

import Container from 'react-bootstrap/Container'



const DetailPage = ({ spell }) => {


return (
  <Container>
  <div className="text-center">
    
    <h2>Details for {spell.name}</h2>
    <h4>{spell.level}</h4>
    <p>Description: {spell.desc}</p>
    <p>Higher Level: {spell.higher_level}</p>
    <p>Range: {spell.range}</p>
    <p>Components: {spell.components}</p>
    <p>Material: {spell.material}</p>
    <p>Ritual: {spell.ritual}</p>
    <p>Duration: {spell.duration}</p>
    <p>Concentration: {spell.concentration}</p>
    <p>Casting Time: {spell.casting_time}</p>
    <p>School: {spell.school}</p>
    <p>Caster Class: {spell.dnd_class}</p>
    <p>Archetype: {spell.archetype}</p>
    <p>Circles: {spell.circles}</p>
  </div>
</Container>
)};



export default DetailPage;