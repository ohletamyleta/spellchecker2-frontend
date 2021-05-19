//I will be the create/edit a spell form
//MAKE SURE TO ADD A NOTE ABOUT SPECIFYING HOMEBREW IN THE SPELL DESCRIPTION!!!
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { updateSpell, createSpell } from '../actions/spellActions';

class spellForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      desc: '',
      higher_level: '',
      range: '',
      components: '',
      material: '',
      ritual: '',
      duration: '',
      concentration: '',
      casting_time: '',
      level: '',
      level_int: '',
      school: '',
      dnd_class: '',
      archetype: '',
      circles: '',
    };

    this.baseState = this.state;
  }

  componentDidMount = () => {
    const { name } = this.state;
    const { spell } = this.props;

    if (!name) {
      this.setState(prevState => ({ ...prevState, ...spell}));
    }
  };


    render() {
      return(
        <form>
          
        </form>
      )
    }
}