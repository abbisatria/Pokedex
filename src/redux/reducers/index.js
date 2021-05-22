import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import pokemonReducer from './pokemon';

const pokemonConfig = {
  key: 'pokemon',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducer = combineReducers({
  pokemon: persistReducer(pokemonConfig, pokemonReducer),
});

export default reducer;
