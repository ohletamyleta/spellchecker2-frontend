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

const spellForm = ({ spellFormData, updateSpell, spellForm }) => {
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const updatedSpellFormInfo = {
      ...spellFormData,
      [name]: value,
    };
    updateSpell(updatedSpellFormInfo);
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    if (id) {
      this.props.updateSpell({ ...this.state }, id);
    } else {
      this.props.createSpell({ ...this.state });
      this.resetForm();
    }
    this.setState({ redirectToNewPage: true });
  };

  


}