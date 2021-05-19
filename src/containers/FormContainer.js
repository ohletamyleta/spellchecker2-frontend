//I will be the create/edit a spell form
//MAKE SURE TO ADD A NOTE ABOUT SPECIFYING HOMEBREW IN THE SPELL DESCRIPTION!!!
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/spellActions';

import Form from '../components/Form'

class FormContainer extends Component {
  submit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <Form onSubmit={this.submit} />
    )
  }
}


export default FormContainer;