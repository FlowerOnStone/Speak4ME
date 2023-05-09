import {equalUndefined} from '../../../../utils/equal-undefined';
import { log } from '../../../../utils/logger';
import equal from 'fast-deep-equal';

/**
 * add checked item id to only one CheckboxList
 * @param {*} state
 * @param {
*          type:
*          payload: {
*            listId: id of list needed to add item
*            []itemIdList: id of item
*          }
*        } action
*/
export const addcheckedIdTo = (state, action) => {
    // log.debug(current(state));
    //   log.debug(action);
      const {type, payload: {listId, itemIdList}} = action;
      if (equalUndefined(listId)) {
          log.warn(`${type}: Element has undefined listId, can not add`);
          return;
      }
      if (!Array.isArray(itemIdList)) {
          log.warn(`${type}: itemIdList is not an array, can not add`);
          return;
      }
      for (let checkboxList of state) {
          if (equal(checkboxList.id, listId)) {
              checkboxList.checkedList ??= [];
              let checkedList = checkboxList.checkedList;
              for (const itemId of itemIdList) {
                if (checkedList.includes(itemId)) {
                    log.warn(`${type}: Item ${itemId} existed in CheckboxList ${checkboxList.id}`);
                }
              }
              checkedList.push(...itemIdList);
              return;
          }
      }
      state.push({
        id: listId,
        checkedList: itemIdList,
      });
      log.info(`${type}: CheckboxList with id=${listId} created`);
};
