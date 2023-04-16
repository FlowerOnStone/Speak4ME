/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.js';
// import appTest from './__tests__/app.test';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
