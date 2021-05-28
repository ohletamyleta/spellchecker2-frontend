add to footer:
<div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

Code snippets for implementing search bar (React):

      <SearchBar filter={this.state.filter} sort={this.state.sort} updateFilter={this.updateFilter} updateSort={this.updateSort}/>

  updateFilter = type  => {
    this.setState({ filter: type })
  }

  updateSort = sortBy => {
    this.setState({ sort: sortBy })
  }

  calculateDisplaySpells = () => {
    let filteredSpells = [...this.state.spells]
    if(this.state.filter !== "All"){
      filteredSpells =  filteredSpells.filter(spell => spell.type === this.state.filter)        
    } 

    switch(this.state.sort){
      case "Alphabetically":
        return filteredSpells.sort((a,b) => a.name > b.name ? 1 : -1)
      case "Level":
          return filteredSpells.sort((a,b) => a.level_int > b.level_int ? 1 : -1)
      default:
        return filteredSpells
    }
  }




// const removeSpell = id => ({
//   type: 'DELETE_SPELL',
//   id,
// });

// const editSpell = spell => ({
//   type: 'UPDATE_SPELL',
//   spell,
// });


// export const deleteSpell = id => dispatch => fetch(`http://localhost:3001/api/v1/spells/${id}`, {
//   method: 'DELETE',
// })
// .then((response) => {
//   if (response.ok) {
//     dispatch(removeSpell(id));
//   } else {
//     window.alert('Unable to delete');
//   }
// })
// .catch(error => console.log(error));

// export const updateSpell = (spell, id) => dispatch => fetch(`http://localhost:3001/api/v1/spells/${id}`, {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(spell),
// })
// .then(response => response.json())
// .then((spell) => {
//   dispatch(editSpell(spell));
// })
// .catch(error=> console.log(error));