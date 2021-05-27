export function getSingleSpell(spellId) {
  return fetch(`http://localhost:3001/api/v1/spells/${spellId}`)
  .then((data) => data.json());
}

