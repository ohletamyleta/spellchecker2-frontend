// const removeSpell = id => ({
//   type: 'DELETE_SPELL',
//   id,
// });

<!-- // const editSpell = spell => ({
//   type: 'UPDATE_SPELL',
//   spell,
// });

    <!-- <button type="submit" className="btn btn-danger margin-right" onClick={() => deleteSpell(id)}>
      Delete
    </button> --> -->

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
<!-- 
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
// .catch(error=> console.log(error)); -->

<!-- Code snippets for implementing search bar (React):

 
  filterList = (spell, searchTerm) => {
return spell.name.includes(searchTerm) || spell.dnd_class.includes(searchTerm) || spell.desc.includes(searchTerm) 
};

filteredSpells = spells.filter(this.filterList(this.state.term));

    <label>Search by spell name or caster class</label>
            <SearchField
              placeholder='Search item'
              onChange={(e) => console.log(e.target.value)}
            /> -->
<!-- import SearchField from 'react-search-field'; -->

      <!-- <Route path='/search' component={SpellSearch}/> -->

      <!-- import SpellSearch from './containers/SpellSearch'; -->