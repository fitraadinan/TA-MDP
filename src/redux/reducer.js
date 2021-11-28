import {combineReducers} from 'redux';

const initialStateCharacter = {
  data: {},
};

const CharacterReducer = (state = initialStateCharacter, action) => {
  if (action.type === 'FILL_DATACHARACTER') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const initialStateDeath = {
  data: {},
};

const DeathReducer = (state = initialStateDeath, action) => {
  if (action.type === 'FILL_DATADEATH') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  CharacterReducer,
  DeathReducer,
});

export default reducer;
