
// import React from 'react';
// import { View } from 'react-native';
// import Icon from './src/components/icons/icon-tag';
// import binIcon from './src/components/icons/bin-icon';

// export default function MyComponent() {
//   return (
//   <View>
//     <View style={{flexDirection: 'row'}}>
//         <Icon icon={binIcon} containerStyle={{backgroundColor:'blue'}} />
//         <View style={{flexDirection: 'column'}}>
//             <Icon icon={binIcon} containerStyle={{backgroundColor:'yellow'}} iconStyle={{scale: 0.5}}/>
//             <Icon icon={binIcon} containerStyle={{backgroundColor:'yellow'}} iconStyle={{scale: 0.5}}/>
//         </View>
//     </View>
//       <View style={{flexDirection: 'row'}}>
//           <Icon icon={binIcon} containerStyle={{backgroundColor:'yellow'}} iconStyle={{scale: 1}}/>
//           <Icon icon={binIcon} containerStyle={{backgroundColor:'yellow'}} iconStyle={{scale: 1}}/>
//       </View>
//   </View>
//   );
// }

// In App.js in a new project

import React, {useCallback} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import screens from './screens';
import COLOR from './src/constants/color';
import SettingsOverlay from './src/components/common/settings-overlay';
import { log } from 'utils';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLOR.TITLE,
          },
          headerTintColor: COLOR.TEXT,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
      >
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const optionsHeader1 = {
  id: 1,
  optionsHeaderProps: {
    title: 'Sắp xếp',
  },
  checkboxListProps: {
    type: 'checkbox',
    defaultCheckedItems:[5],
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
    defaultCheckedItems:[5],
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

const dataList = [optionsHeader1, optionsHeader2, {...optionsHeader1, id: 3}];

const Test = () => {
  const [visible, setVisible] = React.useState(false);
  const handleBackdropPress = useCallback(() => {
      setVisible(false);
  },[]);
  return (
    <View>
      <Button title="hehe" onPress={() => setVisible(true)} />
      <Button title="hehe" onPress={() => setVisible(true)} />
      <SettingsOverlay
        isVisible={visible}
        distanceToTop={50}
        onBackdropPress={handleBackdropPress}
        defaultFocusedId={optionsHeader1.id}
        optionsHeaderList={dataList}
      />
    </View>
  );
};

export default Test;

// export {default} from './.storybook';
