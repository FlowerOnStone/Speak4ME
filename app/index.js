/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.tsx';
// import appTest from './__tests__/app.test';
import {name as appName} from './app.json';

console.log('hehe');
AppRegistry.registerComponent(appName, () => App);
