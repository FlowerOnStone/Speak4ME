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
*            []itemIdList: id of item
*          }
*        } action
*/
export const removeCheckedIdFrom = (state, action) => {
    const {type, payload: {listId, itemIdList}} = action;
    if (equalUndefined(listId)) {
        log.warn(`${type}: Element has undefined listId, can not remove`);
        return;
    }
    if (!Array.isArray(itemIdList)) {
        log.warn(`${type}: itemIdList is not an array, can not remove`);
        return;
    }
    for (let checkboxList of state) {
        if (equal(checkboxList.id, listId)) {
            let checkedList = checkboxList.checkedList;
            for (let itemId of itemIdList) {
                let includes = false;
                for (let i = 0; i < checkedList.length; ++i) {
                    if (equal(checkedList[i], itemId)) {
                        checkedList.splice(i, 1);
                        includes = true;
                        break;
                    }
                }
                if (!includes) {
                    log.warn(`${type}: Has no item ${itemId} in CheckboxList ${listId}`);
                }
            }
            return;
        }
    }
    log.warn(`${type}: Has no CheckboxList ${listId}`);
};
