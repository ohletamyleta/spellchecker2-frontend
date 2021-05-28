import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Header = () => {
  return (
    <Jumbotron fluid>
    <Container>
    <div className='text-center'>
      <h1><strong> Spell Checker 5e</strong></h1>
      <h2>
        <em>A spellbook builder for Dungeons and Dragons 5th Edition*</em>
      </h2>
      <h5><em>*now with homebrew!</em></h5>
    </div>
    </Container>
    </Jumbotron>
  );
};

export default Header;
