import { equalUndefined } from '../../../../utils/equal-undefined';
import { log } from 'utils';
import equal from 'fast-deep-equal';

/**
 * remove checked item id from one CheckboxList
 * @param {*} state
 * @param {
*          type:
*          payload: {
*            listId: id of list needed to add item
*          }
*        } action
*/
export const clearCheckedIdFrom = (state, action) => {
    // log.debug(action);
    // log.debug(current(state));
    const {type, payload: {listId}} = action;
    if (equalUndefined(listId)) {
        log.warn(`${type}: Element has undefined listId, can not remove`);
        return;
    }
    for (let checkboxList of state) {
        if (equal(checkboxList.id, listId)) {
            checkboxList.checkedList.length = 0;
            return;
        }
    }
    log.warn(`${type}: Has no CheckboxList ${listId}`);
};
