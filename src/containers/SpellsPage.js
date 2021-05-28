//I map the spells list and render them! Just the basic params though
// NAME, DESC, LEVEL, DND_CLASS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/spellActions';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

import SpellsList from '../components/SpellsList';
// import SearchBar from '../components/SearchBar';

class SpellsPage extends Component {


  componentDidMount() {
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
       spells
     } = this.props;


      return (
        <Container>
       
        <div className='text-center'>
  
          <h1>Spell Scroll Library</h1>
          <br></br>
          <br></br>
        </div>
          {/* <SearchBar spells={spells}/> */}
        <Row>
          <CardDeck>     

          <SpellsList spells={spells} fallback={'loading...'} />
       
          </CardDeck>
          </Row>
        </Container>
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
