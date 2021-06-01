import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSpell } from '../actions/spellActions';


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


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

    this.handleChange = this.handleChange.bind(this);

    this.baseState = this.state;
  }

  resetForm = () => this.setState(this.baseState);

  handleSubmit = (event) => {
    event.preventDefault();
  // debugger;
    this.props.createSpell(this.state);
    this.resetForm();
    window.location.reload(false);
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    // const value = target.value

    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="text-center">
        <h4>
          Add a spell here! Please add "homebrew" to the Name if it's a custom
          creation.
        </h4>
        <br></br>
        <br></br>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group controlId="formSpellName">
            <Form.Label>Spell Name</Form.Label>
              <Form.Control
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.handleChange}
                placeholder='Spell Name - REQUIRED'
              />
            </Form.Group>
            <Form.Group controlId="formSpellDesc"> 
            <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={5}
                name='desc'
                type='text'
                onChange={this.handleChange}
                value={this.state.desc}
                placeholder='Description - REQUIRED'
              />
          </Form.Group>
          <Form.Group controlId="spellHigherLevel">
            <Form.Label>Higher Level</Form.Label>
              <Form.Control
                name='higher_level'
                type='text'
                onChange={this.handleChange}
                value={this.state.higher_level}
                placeholder='Higher Level'
              />
           </Form.Group>
           <Form.Group controlId="spellRange">
            <Form.Label>Range</Form.Label>
              <Form.Control
                name='range'
                type='text'
                onChange={this.handleChange}
                value={this.state.range}
                placeholder='Range'
              />
          </Form.Group>
           <Form.Group controlId="spellComponents">
            <Form.Label>Components</Form.Label>
               <Form.Control
                name='components'
                type='text'
                onChange={this.handleChange}
                value={this.state.components}
                placeholder='Components'
              />
           </Form.Group>
           <Form.Group controlId="spellMaterial">
            <Form.Label>Material</Form.Label>
              <Form.Control
                name='material'
                type='text'
                onChange={this.handleChange}
                value={this.state.material}
                placeholder='Material'
              />
         </Form.Group>
           <Form.Group controlId="spellRitual">
            <Form.Label>Ritual</Form.Label>
              <Form.Control
                name='ritual'
                type='text'
                onChange={this.handleChange}
                value={this.state.ritual}
                placeholder='Ritual'
              />
         </Form.Group>
           <Form.Group controlId="spellDuration">
            <Form.Label>Duration</Form.Label>
                    <Form.Control
                name='duration'
                type='text'
                onChange={this.handleChange}
                value={this.state.duration}
                placeholder='Duration'
              />
        </Form.Group>
           <Form.Group controlId="sepllConcentration">
            <Form.Label>Concentration</Form.Label>
         
              <Form.Control
                name='concentration'
                type='text'
                onChange={this.handleChange}
                value={this.state.concentration}
                placeholder='Concentration'
              />
      </Form.Group>
           <Form.Group controlId="spellCastingTime">
            <Form.Label>Casting Time </Form.Label>
            
              <Form.Control
                name='casting_time'
                type='text'
                onChange={this.handleChange}
                value={this.state.casting_time}
                placeholder='Casting Time'
              />
      </Form.Group>
           <Form.Group controlId="spellLevel">
            <Form.Label>Level</Form.Label>
    
              <Form.Control
                name='level'
                type='text'
                onChange={this.handleChange}
                value={this.state.level}
                placeholder='Level - REQUIRED'
              />
        </Form.Group>
           <Form.Group controlId="spellLevelInt">
            <Form.Label>Level (Number)</Form.Label>
           
              <Form.Control
                name='level_int'
                type='text'
                onChange={this.handleChange}
                value={this.state.level_int}
                placeholder='Level (Number)'
              />
         </Form.Group>
           <Form.Group controlId="spellSchool">
            <Form.Label>School</Form.Label>
       
              <Form.Control
                name='school'
                type='text'
                onChange={this.handleChange}
                value={this.state.school}
                placeholder='School'
              />
         </Form.Group>
           <Form.Group controlId="spellCasterClass">
            <Form.Label>Caster Class</Form.Label>

              <Form.Control
                name='dnd_class'
                type='text'
                onChange={this.handleChange}
                value={this.state.dnd_class}
                placeholder='Caster Class - REQUIRED'
              />
        </Form.Group>
           <Form.Group controlId="spellArchetype">
            <Form.Label>Archetype</Form.Label>
         
              <Form.Control
                name='archetype'
                type='text'
                onChange={this.handleChange}
                value={this.state.archetype}
                placeholder='Archetype'
              />
          </Form.Group>
           <Form.Group controlId="spellCircles">
            <Form.Label>Circles</Form.Label>
            
              <Form.Control
                name='circles'
                type='text'
                onChange={this.handleChange}
                value={this.state.circles}
                placeholder='Circles'
              />
      </Form.Group>
    <Button variant="success" type="submit">
    Submit
  </Button>
        </Form>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return {
    createSpell: formData => {
      dispatch(createSpell(formData))
    }
  }
};

export default connect(null, mapDispatchToProps)(SpellForm);









  