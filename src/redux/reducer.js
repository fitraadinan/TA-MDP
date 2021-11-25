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

const initialStateEpisode = {
  data: {},
};

const EpisodeReducer = (state = initialStateEpisode, action) => {
  if (action.type === 'FILL_DATAEPISODE') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  CharacterReducer,
  EpisodeReducer,
});

export default reducer;
