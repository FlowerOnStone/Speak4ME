import {Text} from 'react-native';
import React from 'react';
import THEME from '../../../constants/theme';

export const sortOptionHeader = {
    id: 'sort',
    optionsHeaderProps: {
        title: 'Sắp xếp',
    },
    checkboxListProps: {
        type: 'radio',
        defaultCheckedItems: ['recent'],
        itemList: [
            {
                id: 'recent',
                content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>Gần đây</Text>,
            },
            {
                id: 'regular',
                content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>Hay dùng</Text>,
            },
            {
                id: 'alphabetical',
                content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>Từ điển</Text>,
            },
            {
                id: 'custom',
                content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>Tuỳ chỉnh</Text>,
            }],
    },
};

export const textOptionHeader = {
    id: 'text',
    optionsHeaderProps: {
        title: 'Văn bản',
    },
    checkboxListProps: {
        type: 'checkbox',
        checboxProps: {
            checkedIcon: null,
            uncheckedIcon: null,
        },
        defaultCheckedItems: ['recent'],
        itemList: [
            {
                id: 'recent',
                content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>hehe</Text>,
            },
            {
                id: 'regular',
                content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>Hay dùng</Text>,
            },
            {
                id: 'alphabetical',
                content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>Từ điển</Text>,
            },
            {
                id: 'custom',
                content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>Tuỳ chỉnh</Text>,
            }],
    },
};
