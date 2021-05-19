STRETCHY THINGS:
- add school icons to singleSpell render

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
mport React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { updateSpell, createSpell } from '../actions/spellActions';
import { Button, Input, TextArea } from '../components/Form';

class FormContainer extends Component {
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
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  componentDidMount = () => {
    const { name } = this.state;
    const { spell } = this.props;

    if (!name) {
      this.setState(prevState => ({ ...prevState, ...spell }));
    }
  };

  handleFormSubmit(e, id) {
    e.preventDefault();
   if (id) {
     this.props.updateSpell({ ...this.state }, id);
   } else {
     this.props.createSpell({ ...this.state });
     this.resetForm();
   }
   this.setState({ redirectToNewPage: true });
  }

  handleClearForm(e) {
 e.preventDefault();
     this.setState = ({
       newSpell: {
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
     },
  })
}


   handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newSpell : 
        {...prevState.newSpell, [name]: value
        }
      }), () => console.log(this.state.newSpell))
   }
  
  handleTextArea(e) {
 let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newSpell, about: value
      }
      }), ()=>console.log(this.state.newSpell))
  }

  render() {
    return(
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input type={'text'}
          title={'Name'}
          name= {'name'}
          value={this.state.spell.name}
          placeholder = {'Name of Spell'}
          handleChange = {this.handleName}
          />
        <TextArea type={'text'}
          title={'Description'}
          name= {'desc'}
          value={this.state.spell.desc}
          placeholder = {'Description'}
          handleChange = {this.handleDesc}
          />
        <Input type={'text'}
          title={'Name'}
          name= {'name'}
          value={this.state.spell.name}
          placeholder = {'Name of Spell'}
          handleChange = {this.handleName}
          />
        <Input type={'text'}
          title={'Name'}
          name= {'name'}
          value={this.state.spell.name}
          placeholder = {'Name of Spell'}
          handleChange = {this.handleName}
          />
        <Input type={'text'}
          title={'Name'}
          name= {'name'}
          value={this.state.spell.name}
          placeholder = {'Name of Spell'}
          handleChange = {this.handleName}
          />

      </form>
      
    )
  }

}
export default FormContainer;
  


}