add to footer:
<div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


  return (
    <div>
      <div className='SpellCard'>
        <h2 key={spell.id}>{spell.attributes.name}</h2>
        <p>{spell.attributes.desc}</p>
        <h5>
          <strong>{spell.attributes.level}</strong>
        </h5>
        <h3>
          <em>
            <Link to={`/spell/${spell.id}`}>
              More Details
            </Link>
          </em>
        </h3>
          <br></br>
      </div>
    </div>
  );





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