//I map the spells list and render them! Just the basic params though
// NAME, DESC, LEVEL, DND_CLASS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/spellActions';

import SpellsList from '../components/SpellsList';
import singleSpell from './singleSpell';
import Form from '../components/SpellForm';


class SpellsPage extends Component {

  componentDidMount () {
   
  }

    render() {
     
      return (
        <h2>Spells Page in da house!</h2>
      )
    }
}

const mapStateToProps = state => ({
  spells: state.spells,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpellsPage);