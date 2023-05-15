import { View, StyleSheet } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import toJSX from '../../../utils/convert-to-jsx';
import { CheckBox } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { checkboxListActions as actions } from '../../../redux/components/checkbox-list/slice';
import {randomId} from '../../../utils/random-id';
import equal from 'fast-deep-equal';
import log from '../../../utils/logger';
import {equalUndefined} from '../../../utils/equal-undefined';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import THEME from '../../../constants/theme';

const RADIO_TYPE = 'radio';
const CHECKBOX_TYPE = 'checkbox';

// library.add(faSquareCheck, faSquare);
const defaultCheckIcon = <FontAwesomeIcon icon={faSquareCheck} size={THEME.FONT_SIZE_SMALL} color={'#50D890'}/>;
const defaultUncheckIcon = <FontAwesomeIcon icon={faSquare} size={THEME.FONT_SIZE_SMALL} color="#BFCCB5"/>;

/**
 * Use this Component for display List of checkbox Item,
 * each element of children will be taken as content for checkbox
 * @param {
 *      string type: 'radio' | 'checkbox', default is 'radio'
 *      id: id for this checkbox list
 *      Number[] defaultCheckedItems: list of item's id is checked by default
 *      checkboxProps: following 'https://reactnativeelements.com/docs/components/checkbox'
 *      {any id, React.Component content}[] itemList: list of item display with checkbox
 *      Style itemContainerStyle: style for container of single item of children
 * } param0
 * @returns
 */
const CheckBoxList = ({
    header,
    type,
    id,
    warning,
    defaultCheckedItems,
    checboxProps,
    itemList,
    itemContainerStyle,
    checkboxContainerStyle,
    containerStyle,
    onItemPress,
    children,
}) => {

    warning ??= true;
    // noti
    if (warning && equalUndefined(id)) {
        log.warn('CheckboxList has no id, random id generated automatically');
    }
    type ??= RADIO_TYPE;
    defaultCheckedItems ??= [];
    id ??= randomId();
    if (type === RADIO_TYPE && defaultCheckedItems.length > 1) {
        log.warn(`CheckboxList ${id} with radio type has defaultCheckedItems.length > 1`);
    }
    itemList ??= [];

    const [checkedIdList, setCheckedIdList] = useState(defaultCheckedItems);
    const dispatch = useDispatch();
    const idRef = useRef(id);

    useEffect(() => {
        dispatch(actions.clearCheckedIdFrom({
            listId: getId(),
        }));
        dispatch(actions.addcheckedIdTo({
            listId: getId(),
            itemIdList: defaultCheckedItems,
        }));
    }, [defaultCheckedItems, dispatch]);

    const getId = () => idRef.current;
    const isChecked = (itemId) => {
        for (let i = 0; i < checkedIdList.length; ++i) {
            if (equal(checkedIdList[i], itemId)) {
                return true;
            }
        }
        return false;
    };

    // log.warn('re-render checkbox-list');
    // console.log(dispatch(actions.getCheckedList([getId()])))
    const handlePressCheckBox = (itemId) => {
        // dispatch(ite)
        if (typeof onItemPress === 'function') {
            onItemPress();
        }
        switch (type) {
            case RADIO_TYPE:
                dispatch(actions.clearCheckedIdFrom({
                    listId: getId(),
                }));
                if (isChecked(itemId)) {
                    setCheckedIdList([]);
                } else {
                    setCheckedIdList([itemId]);
                    dispatch(actions.addcheckedIdTo({
                        listId: getId(),
                        itemIdList: [itemId],
                    }));
                }
                break;
            case CHECKBOX_TYPE:
                if (isChecked(itemId)) {
                    setCheckedIdList(checkedIdList.filter(idx => !equal(idx, itemId)));
                    dispatch(actions.removeCheckedIdFrom({
                        listId: getId(),
                        itemIdList: [itemId],
                    }));
                } else {
                    setCheckedIdList([...checkedIdList, itemId]);
                    dispatch(actions.addcheckedIdTo({
                        listId: getId(),
                        itemIdList: [itemId],
                    }));
                }
                break;
            default:
        }
    };

    return (
        <View style={containerStyle}>
            {toJSX(header)}
            {
                itemList.map((Item, idx) => {
                    if (typeof Item.id === 'undefined') {
                        log.warn('An item in CheckboxList has no id, random id generated automatically');
                        Item.id = randomId();
                    }
                    return (
                        <CheckBox
                            key={Item.id}
                            containerStyle={{...styles.defaultCheckboxContainerStyle, ...checkboxContainerStyle}}
                            title={
                                <View
                                    style={StyleSheet.flatten([styles.defaultItemContainerStyle, itemContainerStyle])}
                                    onStartShouldSetResponder={onItemPress}
                                >
                                    {toJSX(Item.content)}
                                </View>
                            }
                            checked = {isChecked(Item.id)}
                            onPress={() => handlePressCheckBox(Item.id)}
                            uncheckedIcon={defaultUncheckIcon}
                            checkedIcon={defaultCheckIcon}
                            {...checboxProps}
                        />
                    );
                })
            }
            {children}
        </View>
    );
};

export default CheckBoxList;

const styles = StyleSheet.create({
    defaultItemContainerStyle: {
        paddingLeft: 8,
        // marginTop: 0,
        // backgroundColor: 'purple',
    },
    defaultCheckboxContainerStyle: {
        // backgroundColor: 'yellow',
        paddingBottom: 4,
        paddingTop: 0,
    },
});
