import React, {useCallback} from 'react';
import { View, Text } from 'react-native';
import Test from './default';

const Main = {
    title: 'Settings Overlay',
    component: Test,
    args: {

    },
    decorators: [
        // (Story) => (
        //     <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        //         <Story />
        //     </View>
        // )
    ]
};

export default Main;

export const Default = {

}

