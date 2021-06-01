import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as actions from '../actions/spellActions';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardDeck from 'react-bootstrap/CardDeck'

import SpellsList from '../components/SpellsList';



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

     console.log(spells);

      return (
        <Container>
          <div className='text-center'>
            <h1>Spell Scroll Library</h1>
            <br></br>
            <br></br>
        
          </div>

          <Row>
            <CardDeck>
              <SpellsList spells={spells} fallback={'loading...'} />
            </CardDeck>
          </Row>
          <div>
            Icons made by{' '}
            <a
              href='https://www.flaticon.com/authors/smalllikeart'
              title='smalllikeart'>
              smalllikeart
            </a>{' '}
            from{' '}
            <a href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </a>
          </div>
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
