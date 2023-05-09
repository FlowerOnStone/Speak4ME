import { useSelector } from 'react-redux';

const { createSelector } = require('@reduxjs/toolkit');

const checkboxListSelector = (state) => state.components.checkboxList;

/**
 * get the checked list from id in listIdList
 * @param  {...any} listIdList list of listId to get checkedList
 * @returns [{
 *  listId: id of this list
 *  [] checkedList: list id of checked item of listId
 * }]
 */
const checkedListSelector = createSelector(checkboxListSelector, (checkboxListList) => {

});

export default checkboxListSelector;
