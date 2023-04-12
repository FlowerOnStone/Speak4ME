import { View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ClearIcon = () => {
  return (
    <View>
        <Icon type="material"
            size={25}
            color="#daff"
            name="chain-broken" />
    </View>
  );
};

export default ClearIcon;
