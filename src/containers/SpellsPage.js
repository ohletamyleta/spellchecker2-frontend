//I map the spells list and render them! Just the basic params though
// NAME, DESC, LEVEL, DND_CLASS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/spellActions';

import SpellsList from '../components/SpellsList';
import SingleSpell from './SingleSpell';
import Form from '../components/SpellForm';


class SpellsPage extends Component {

  componentDidMount () {
   const {
     spells,
     actions: { fetchSpells },
      } = this.props;
     
      if (spells.length === 0) {
        fetchSpells();
      }
  }

    render() {
     const {
       spells,
       match,
     } = this.props;

      return (
        <div>
          <h2>Spells Page in da house!</h2>
          <SpellsList spells={spells}/>
        </div>
      );
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