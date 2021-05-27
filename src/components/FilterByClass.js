//I'm going to be the menu for filtering spells displayed by caster class (dnd_class).  I'll probably be a basic ass
//dropdown menu that gets attached between the navbar and the spell list in the container!

//Sample dropdown menu form from React docs:


// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'coconut' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value='grapefruit'>Grapefruit</option>
//             <option value='lime'>Lime</option>
//             <option value='coconut'>Coconut</option>
//             <option value='mango'>Mango</option>
//           </select>
//         </label>
//         <input type='submit' value='Submit' />
//       </form>
//     );
//   }
// }