//I map the spells list and render them! Just the basic params though
// NAME, DESC, LEVEL, DND_CLASS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/spellActions';

import SpellsList from '../components/SpellsList';
import SpellDetail from '../components/SpellDetail';




class SpellsPage extends Component {


  componentDidMount () {
   const {
     spells,
     actions: { fetchSpells },
      } = this.props;
     
      if (!spells) {
        fetchSpells();
      }
  }

    render() {
    
     const {
       spells,
     } = this.props;

 

      return (
        <div className='container'>
          <SpellsList spells={spells} fallback={'loading...'} />
        </div>
      );
    }
}

const mapStateToProps = state => ({
  spells: state.spells.spells,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpellsPage);