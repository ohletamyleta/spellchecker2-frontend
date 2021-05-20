STRETCHY THINGS:
- add school icons to singleSpell render

class SpellForm extends Component {
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
  
<!-- 

import React from 'react';
import { Field, reduxForm } from 'redux-form';


const Form = props => {
 const { handleSubmit } = props

 return (
   <div>
    <form onSubmit={ handleSubmit }>
      <div>
        <label>Spell Name</label>
        <div>
          <Field
            name='name'
            component='input'
            type='text'
            placeholder='Spell Name'
          />
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field
            name='desc'
            component='textarea'
            type='text'
            placeholder='Description'
          />
        </div>
      </div>
      <div>
        <label>Higher Level</label>
        <div>
          <Field
            name='higher_level'
            component='input'
            type='text'
            placeholder='Higher Level'
          />
        </div>
      </div>
      <div>
        <label>Range</label>
        <div>
          <Field
            name='range'
            component='input'
            type='text'
            Placeholder='Range'
          />
        </div>
      </div>
      <div>
        <label>Components</label>
        <div>
          <Field
            name='components'
            component='input'
            type='text'
            Placeholder='Components'
          />
        </div>
      </div>
      <div>
        <label>Material</label>
        <div>
          <Field
            name='material'
            component='input'
            type='text'
            Placeholder='Material'
          />
        </div>
      </div>
      <div>
        <label>Ritual</label>
        <div>
          <Field
            name='ritual'
            component='input'
            type='text'
            Placeholder='Ritual'
          />
        </div>
      </div>
      <div>
        <label>Duration</label>
        <div>
          <Field
            name='duration'
            component='input'
            type='text'
            Placeholder='Duration'
          />
        </div>
      </div>
      <div>
        <label>Concentration</label>
        <div>
          <Field
            name='concentration'
            component='input'
            type='text'
            Placeholder='Concentration'
          />
        </div>
      </div>
      <div>
        <label>Casting Time </label>
        <div>
          <Field
            name='casting_time'
            component='input'
            type='text'
            Placeholder='Casting Time'
          />
        </div>
      </div>
      <div>
        <label>Level</label>
        <div>
          <Field
            name='level'
            component='input'
            type='text'
            Placeholder='Level'
          />
        </div>
      </div>
      <div>
        <label>Level (Number)</label>
        <div>
          <Field
            name='level_int'
            component='input'
            type='text'
            Placeholder='Level (Number)'
          />
        </div>
      </div>
      <div>
        <label>School</label>
        <div>
          <Field
            name='school'
            component='input'
            type='text'
            Placeholder='School'
          />
        </div>
      </div>
      <div>
        <label>Caster Class</label>
        <div>
          <Field
            name='dnd_class'
            component='input'
            type='text'
            Placeholder='Caster Class'
          />
        </div>
      </div>
      <div>
        <label>Archetype</label>
        <div>
          <Field
            name='archetype'
            component='input'
            type='text'
            Placeholder='Archetype'
          />
        </div>
      </div>
      <div>
        <label>Circles</label>
        <div>
          <Field
            name='circles'
            component='input'
            type='text'
            Placeholder='Circles'
          />
        </div>
      </div>
      <div>
        <button type='submit'>
          Submit
        </button>
         </div>
    </form>
    </div>
  )
 }



export default reduxForm({ form: 'Form'})(Form); -->

\// import React from 'react';
// import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';

// import Form from '../components/Form';

// import * as actions from '../actions/spellActions';


// let FormContainer = ({ handleFormSubmit, values }) => (
//   <div>
//     <h1>HI</h1>
//     <Form onSubmit={(values) => handleFormSubmit(values.FormContainer)} />
//   </div>
// );


//   const mapDispatchToProps = (dispatch) => {
//     return {
//   handleFormSubmit: value => dispatch({ type: 'CREATE_SPELL', payload: value }),
//   };
//   }

// // export default FormContainer;
// export default reduxForm({ form: 'FormContainer' })(connect(null, mapDispatchToProps)(FormContainer));
