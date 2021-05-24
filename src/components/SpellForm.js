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

    this.handleInputChange = this.handleInputChange.bind(this);

    // this.baseState = this.state;
  }

  // resetForm = () => this.setState(this.baseState);

  handleSubmit = (event) => {
    event.preventDefault();
  // debugger;
    this.props.createSpell(this.state);
    // this.resetForm();
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value

    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h4>
          Add a spell here! Please add "homebrew" to the Name if it's a custom
          creation.
        </h4>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <label>Spell Name</label>
            <div>
              <input
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                value={this.state.desc}
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
                onChange={this.handleInputChange}
                value={this.state.higher_level}
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
                onChange={this.handleInputChange}
                value={this.state.range}
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
                onChange={this.handleInputChange}
                value={this.state.components}
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
                onChange={this.handleInputChange}
                value={this.state.material}
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
                onChange={this.handleInputChange}
                value={this.state.ritual}
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
                onChange={this.handleInputChange}
                value={this.state.duration}
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
                onChange={this.handleInputChange}
                value={this.state.concentration}
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
                onChange={this.handleInputChange}
                value={this.state.casting_time}
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
                onChange={this.handleInputChange}
                value={this.state.level}
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
                onChange={this.handleInputChange}
                value={this.state.level_int}
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
                onChange={this.handleInputChange}
                value={this.state.school}
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
                onChange={this.handleInputChange}
                value={this.state.dnd_class}
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
                onChange={this.handleInputChange}
                value={this.state.archetype}
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
                onChange={this.handleInputChange}
                value={this.state.circles}
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


const mapDispatchToProps = dispatch => {
  return {
    createSpell: () => {
      dispatch(createSpell())
    }
  }
};

export default connect(null, mapDispatchToProps)(SpellForm);









  