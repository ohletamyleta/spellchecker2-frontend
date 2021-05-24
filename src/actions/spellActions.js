const getSpells = spells => ({
  type: 'GET_SPELLS',
  spells,
});

const addSpell = spell => ({
  type: 'CREATE_SPELL',
  spell,
});

// const removeSpell = id => ({
//   type: 'DELETE_SPELL',
//   id,
// });

// const editSpell = spell => ({
//   type: 'UPDATE_SPELL',
//   spell,
// });

//async actions here

export const fetchSpells = () => dispatch => fetch(`http://localhost:3001/api/v1/spells`)
.then(response => response.json())
.then(spells => dispatch(getSpells(spells)))
.catch(error => console.log(error));

export const createSpell = spell => dispatch => fetch(`http://localhost:3001/api/v1/spells`, {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify({ spell }),
})
.then(response => response.json())
.then((spell) => {
  dispatch(addSpell(spell));
})
.catch(error => console.log(error));

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