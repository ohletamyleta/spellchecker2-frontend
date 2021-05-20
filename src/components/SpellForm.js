import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSpell } from '../actions/spellActions';

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

  handleChange(e) {
    this.setState({
      
    })
  }






  render() {
    return (
      <div>
        <form>
          <div>
            <label>Spell Name</label>
            <div>
              <input
                name='name'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Spell Name'
              />
            </div>
          </div>
          <div>
            <label>Description</label>
            <div>
              <textarea
                name='desc'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Description'
              />
            </div>
          </div>
          <div>
            <label>Higher Level</label>
            <div>
              <input
                name='higher_level'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Higher Level'
              />
            </div>
          </div>
          <div>
            <label>Range</label>
            <div>
              <input
                name='range'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Range'
              />
            </div>
          </div>
          <div>
            <label>Components</label>
            <div>
              <input
                name='components'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Components'
              />
            </div>
          </div>
          <div>
            <label>Material</label>
            <div>
              <input
                name='material'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Material'
              />
            </div>
          </div>
          <div>
            <label>Ritual</label>
            <div>
              <input
                name='ritual'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Ritual'
              />
            </div>
          </div>
          <div>
            <label>Duration</label>
            <div>
              <input
                name='duration'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Duration'
              />
            </div>
          </div>
          <div>
            <label>Concentration</label>
            <div>
              <input
                name='concentration'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Concentration'
              />
            </div>
          </div>
          <div>
            <label>Casting Time </label>
            <div>
              <input
                name='casting_time'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Casting Time'
              />
            </div>
          </div>
          <div>
            <label>Level</label>
            <div>
              <input
                name='level'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Level'
              />
            </div>
          </div>
          <div>
            <label>Level (Number)</label>
            <div>
              <input
                name='level_int'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Level (Number)'
              />
            </div>
          </div>
          <div>
            <label>School</label>
            <div>
              <input
                name='school'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='School'
              />
            </div>
          </div>
          <div>
            <label>Caster Class</label>
            <div>
              <input
                name='dnd_class'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Caster Class'
              />
            </div>
          </div>
          <div>
            <label>Archetype</label>
            <div>
              <input
                name='archetype'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Archetype'
              />
            </div>
          </div>
          <div>
            <label>Circles</label>
            <div>
              <input
                name='circles'
                type='text'
                onChange={(event) => this.handleChange(event)}
                placeholder='Circles'
              />
            </div>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
 }
};

export default SpellForm;








  