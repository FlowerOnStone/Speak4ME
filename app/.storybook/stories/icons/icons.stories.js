import React from 'react';
import {View} from 'react-native';
import binIcon from '../../../src/components/icons/bin-icon';
import Icon from '../../../src/components/icons/icon-tag';
import copyIcon from '../../../src/components/icons/copy-icon';
import editIcon from '../../../src/components/icons/edit-icon';
import historyIcon from '../../../src/components/icons/history-icon';
import moreOptionIcon from '../../../src/components/icons/more-options-icon';
import plusIcon from '../../../src/components/icons/plus-icon';
import popularSentencesIcon from '../../../src/components/icons/popular-sentences-icon';
import saveIcon from '../../../src/components/icons/save-icon';
import searchIcon from '../../../src/components/icons/search-icon';
import speakIcon from '../../../src/components/icons/speak-icon';
import { storiesOf } from '@storybook/react-native';

const Icons = {
    title: 'Icons',
    component:  Icon,
    args: {
        iconStyle: {
            scale: 5,
        }
    },
    decorators: [
        (Story) => (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Story />
            </View>
        )
    ]
}

export default Icons;

storiesOf('Icons/vcl', module).add('hehe', () => (
    <Icon icon={binIcon} iconStyle={{scale: 5}}/>
));

export const bin = {
    args: {
        icon: binIcon,
    }
};

export const copy = {
    args: {
        icon: copyIcon,
    }
};

export const edit = {
    args: {
        icon: editIcon,
    }
};

export const history = {
    args: {
        icon: historyIcon,
    }
};

export const MoreOption = {
    args: {
        icon: moreOptionIcon,
    }
};

export const plus = {
    args: {
        icon: plusIcon,
    }
};

export const popularSentences = {
    args: {
        icon: popularSentencesIcon,
    }
};

export const save = {
    args: {
        icon: saveIcon,
    }
};

export const search = {
    args: {
        icon: searchIcon,
    }
};

export const speak = {
    args: {
        icon: speakIcon,
    }
};

