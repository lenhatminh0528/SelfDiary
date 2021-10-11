/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import Pushnotification from 'react-native-push-notification';

Pushnotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION: ', notification);
  },

  onRegister: function (token) {
    console.log('TOKEN: ', token);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);
