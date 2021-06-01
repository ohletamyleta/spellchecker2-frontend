
export default function spellReducer(state = [], action) {
    switch (action.type) {

    case "GET_SPELLS":
      return { ...state,
         spells: action.spells
         };
    
    case 'CREATE_SPELL':
      return state.concat(action.crop);

    default:
      return state;

    }  
 
}
