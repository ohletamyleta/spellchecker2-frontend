import React from 'react';
import { connect } from 'react-redux';

const SpellDetail = ({ spell }) => {

  const {
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
  } = spell;

  return (
    <h2>I am the full info page about a spell!</h2>
  )
};

const mapStateToProps = (state, ownProps) => {
  const spell = state.spells.find(s => s.id === +ownProps.match.params.spellId);

  if (spell) {
    return { spell };
  }
  return { spell: {} };
};

export default connect(mapStateToProps)(SpellDetail);