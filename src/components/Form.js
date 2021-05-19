import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'react-redux-form';

import { load as loadAccount } from './account'

const data = {
  name: 'Blood Rage (Homebrew)',
  desc: 'Upon shedding a drop of blood, the caster is enhanced as a Barbarian in full rage equal to their caster level.',
  higher_level: 'n/a',
  range: 'Touch',
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


let Form = (props) => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
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
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  );
};

// // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
Form = reduxForm({
  form: 'spells', 
})(Form);

// You have to connect() to any reducers that you wish to connect to yourself
Form = connect(
  (state) => ({
    initialValues: state.account.data, // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(Form);

export default Form;