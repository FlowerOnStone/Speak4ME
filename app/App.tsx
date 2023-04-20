
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

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import screens from './screens';
import COLOR from './src/constants/color';
import BaseFrame from './src/components/common/base-frame';
import Topic from './src/components/popular-sentences-screen/topic';
import binIcon from './src/components/icons/bin-icon';
import plusIcon from './src/components/icons/plus-icon';
import moreOptionIcon from './src/components/icons/more-options-icon';
import Icon from './src/components/icons/icon-tag';

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
// export default App;

class Hehe extends React.Component {
  render() {
    return <Icon icon={binIcon}/>
    ;
  }
}

const test = () => (
  <BaseFrame itemList={[<Hehe/>, Hehe]}>
      <View style={{position:'relative', width: 300, height: 100, borderWidth: 10}}/>
  </BaseFrame>
);

export default test;

// export {default} from './.storybook';
