
export default function spellReducer(state = [], action) {
    switch (action.type) {

    case "GET_SPELLS":
      return { ...state,
         spells: action.spells
         };
    
    case 'CREATE_SPELL':
      return state.concat(action.crop);

      

    // case 'DELETE_SPELL':
    //   return state.filter(spell => spell.id !== action.id);

    // case 'UPDATE_SPELL':
    //   return state.map(spell => (spell.id === action.spell.id ? {...spell, ...action.spell } : spell));
     
    default:
      return state;

    }  
 
}