// import {useEffect} from 'react';
// import {Platform} from 'react-native';
// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import {useNavigation} from '@react-navigation/native';
// import {isAndroid} from '../../../utils';

// const PushNotificationComponent = props => {
//   const navigation = useNavigation();

//   const handleOpenLocalNotification = async notification => {
//     console.log('handleOpenlocalNotification');
//     //base on type to navigation
//     switch (notification?.type) {
//     }
//   };

//   const handleOpenNotification = async payload => {
//     console.log('handleOpenNotification', payload);
//     // Handle notification on android and iOS will be separated due to different callback.
//     if (payload?.notificationType === 'Local' && isAndroid) {
//       handleOpenLocalNotification(payload);
//     }
//   };
//   const onLocalNotificationIOS = notification => {
//     console.log('onLocalNotificationIOS', notification);
//     handleOpenLocalNotification(notification?._data);
//   };

//   useEffect(() => {
//     console.log('setup and config push notification, isAndroid: ', !isAndroid);

//     // Must be outside of any component LifeCycle (such as `componentDidMount`).
//     PushNotification.configure({
//       // (optional) Called when Token is generated (iOS and Android)
//       // onRegister: function (token) {
//       //   console.log('TOKEN:', token);
//       // },

//       // (required) Called when a remote is received or opened, or local notification is opened
//       onNotification: function (notification) {
//         console.log('NOTIFICATION onNotification:', notification);

//         // process the notification

//         // (required) Called when a remote is received or opened, or local notification is opened
//         // notification.finish(PushNotificationIOS.FetchResult.NoData);
//       },

//       // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//       onAction: function (notification) {
//         console.log('ACTION:', notification.action);
//         console.log('NOTIFICATION onAction:', notification);

//         // process the action
//       },

//       // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//       // onRegistrationError: function (err) {
//       //   console.error(err.message, err);
//       // },

//       // IOS ONLY (optional): default: all - Permissions to register.
//       permissions: {
//         alert: true,
//         badge: true,
//         sound: true,
//       },

//       // Should the initial notification be popped automatically
//       // default: true
//       popInitialNotification: true,

//       /**
//        * (optional) default: true
//        * - Specified if permissions (ios) and token (android and ios) will requested or not,
//        * - if not, you must call PushNotificationsHandler.requestPermissions() later
//        * - if you are not using remote notification or do not have Firebase installed, use this:
//        *     requestPermissions: Platform.OS === 'ios'
//        */
//       requestPermissions: !isAndroid,
//     });
//   }, []);
//   return null;
// };

// export default PushNotificationComponent;
