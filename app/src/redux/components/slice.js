import { combineReducers } from 'redux';
import { checkboxListReducer } from './checkbox-list/slice';

export const componentsReducer = combineReducers({
    checkboxList: checkboxListReducer,
});

