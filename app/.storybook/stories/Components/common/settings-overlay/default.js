import React, {useCallback} from 'react';
import { View, Text, Button } from 'react-native';
import SettingsOverlay from '../../../../../src/components/common/settings-overlay';

const optionsHeader1 = {
    id: 1,
    optionsHeaderProps: {
        title: 'Sắp xếp',
    },
    checkboxListProps: {
        type: 'checkbox',
        defaultCheckedItems: [5],
        itemList: [
            {
                id: 5,
                content: <Text style={{ fontSize: 20 }}>vl</Text>,
            },
            {
                id: 6,
                content: <Text style={{ fontSize: 20 }}>hehe</Text>,
            }],
    },
};
const optionsHeader2 = {
    id: 2,
    optionsHeaderProps: {
        title: 'Hiển thị',
    },
    checkboxListProps: {
        type: 'radio',
        defaultCheckedItems: [5],
        itemList: [
            {
                id: 5,
                content: <Text style={{ fontSize: 20 }}>lmao</Text>,
            },
            {
                id: 6,
                content: <Text style={{ fontSize: 20 }}>kk</Text>,
            }],
    },
};

const dataList = [optionsHeader1, optionsHeader2, { ...optionsHeader1, id: 3 }];

const Test = () => {
    const [visible, setVisible] = React.useState(false);
    const handleBackdropPress = useCallback(() => {
        setVisible(false);
    }, []);
    return (
        <View>
            <Button title='Show Overlay' onPress={() => setVisible(true)}/>
            <SettingsOverlay
                isVisible={visible}
                distanceToTop={35}
                onBackdropPress={handleBackdropPress}
                defaultFocusedId={optionsHeader1.id}
                optionsHeaderList={dataList}
            />
        </View>
    );
};

export default Test;
