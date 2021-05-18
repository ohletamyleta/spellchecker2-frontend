const initialState=
{
  spells: [];
}

export default (state = initialState, action) => {
    switch (action.type) {

    case "GET_SPELLS":
      return { ...state,
         spells: action.spells
         };
    
    case 'CREATE_SPELL':
      return 
      
}