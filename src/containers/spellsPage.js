//I map the spells list and render them! Just the basic params though
// NAME, DESC, LEVEL, DND_CLASS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/spellActions';

import spellsList from '../components/spellsList';
import singleSpell from './singleSpell';
import spellForm from './spellForm';


class spellsPage extends Component {

  componentDidMount () {
    const {
      spells,
      actions: { fetchSpells },
    } = this.props;
    if (spellsList.length === 0) {
      fetchSpells();
    }
  }

    render() {
       const {
         spells,
         match,
         actions: { updateSpell, deleteSpell },
       } = this.props;
      return (
        <div className='container'>
          <Switch>
            <Route exact path={`${match.url}/:spellId/edit`} component={spellForm}/>
            <Route exact path={`${match.url}/new`} component={spellForm} />
            <Route exact path={`${match.url}/:spellId`} component={singleSpell} />
          </Switch>
          <spellsList spells={spells} updateSpell={updateSpell} deleteSpell={deleteSpell} />
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
)(spellsPage);