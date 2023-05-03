import { createSlice } from '@reduxjs/toolkit';
import {removeCheckedIdFrom, addcheckedIdTo, clearCheckedIdFrom} from './actions';

const initialState = [];

/**
 *  structure of state: [{
 *    any id: id of this list,
 *    [itemId] checkedList: list of id of checked item
 *  }]
 *
 */

export const {reducer: checkboxListReducer, actions: checkboxListActions} = createSlice({
    name: 'checkbox-list',
    initialState,
    reducers: {
      addcheckedIdTo,
      removeCheckedIdFrom,
      clearCheckedIdFrom,
    },
});
