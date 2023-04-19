import React from 'react';
import {View} from 'react-native';
import BaseFrame from '../../../../src/components/common/base-frame';

import binIcon from '../../../../src/components/icons/bin-icon';
import Icon from '../../../../src/components/icons/icon-tag';
import copyIcon from '../../../../src/components/icons/copy-icon';
import editIcon from '../../../../src/components/icons/edit-icon';
import historyIcon from '../../../../src/components/icons/history-icon';
import moreOptionIcon from '../../../../src/components/icons/more-options-icon';
import plusIcon from '../../../../src/components/icons/plus-icon';
import popularSentencesIcon from '../../../../src/components/icons/popular-sentences-icon';
import saveIcon from '../../../../src/components/icons/save-icon';
import searchIcon from '../../../../src/components/icons/search-icon';
import speakIcon from '../../../../src/components/icons/speak-icon';

const Main = {
    title: 'Base Frame',
    component:  BaseFrame,
    args: {

    },
    decorators: [
        (Story) => (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Story />
            </View>
        )
    ]
};

export default Main;

export const Default = {

}

export const HasIcon = {
    args: {
        itemList: [<Icon icon={binIcon}/>,
                   <Icon icon={plusIcon}/>,
                   <Icon icon={moreOptionIcon}/>],
    }
}
