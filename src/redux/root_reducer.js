import { combineReducers } from 'redux';
import { createComixReducer } from './create_comix_reducer';

export const rootReducer = combineReducers({
    createComixReducer: createComixReducer,
})