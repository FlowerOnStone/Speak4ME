import {combineReducers} from 'redux';
import { checkboxReducer } from '../checkbox-list/slice';

export const settingsOverlayReducer = combineReducers({
    checkbox: checkboxReducer,
});
