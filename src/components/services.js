export function getSpells() {
  return fetch(`http://localhost:3001/api/v1/spells`)
  .then((data) => data.json());
}
