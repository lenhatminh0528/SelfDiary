// import PushNotification from 'react-native-push-notification';
// import {isAndroid} from '../../../utils/';
// import moment from 'moment';

// class NotificationService {
//   constructor() {
//     if (NotificationService._instance) {
//       return NotificationService._instance;
//     }
//     NotificationService._instance = this;
//     this.notificationCount = 0;
//     this.handleClearBadgeOnActive();
//   }

//   handleClearBadgeOnActive = () => {
//     //Clear badge number at start
//     PushNotification.getApplicationIconBadgeNumber(function (number) {
//       if (number > 0) {
//         PushNotification.setApplicationIconBadgeNumber(0);
//       }
//     });
//   };

//   pushLocalNotification = (type, message, title) => {
//     let id;
//     this.notificationCount += 1;
//     const useInfo = {
//       id,
//       type,
//       notificationType: 'Local',
//     };
//     if (isAndroid) {
//       PushNotification.createChannel(
//         {
//           channelId: type,
//           channelName: type,
//           soundName: 'default',
//           importance: 4,
//           vibrate: true,
//         },
//         () => {
//           PushNotification.localNotification({
//             channelId: type,
//             soundName: 'default',
//             importance: 4,
//             priority: 'high',
//             visibility: 'private',
//             smallIcon: 'ic_notification',
//             largeIcon: 'ic_notification',
//             // color: 'red',
//             ticker: type,
//             vibrate: true,
//             id: id,
//             message: message,
//             allowWhileIdle: false,
//             title,
//             showWhen: true,
//             when: new Date().getTime(),
//             useInfo,
//             number: this.notificationCount,
//           });
//         },
//       );
//     } else {
//       PushNotification.localNotification({
//         soundName: 'default',
//         playSound: true,
//         number: this.notificationCount,
//         id: id,
//         message: message,
//         allowWhileIdle: false,
//         useInfo,
//         title,
//       });
//     }
//   };

//   scheduleNotification = (type, message, title, date) => {
//     let id;
//     id = 1;
//     this.notificationCount += 1;
//     const userInfo = {
//       id,
//       type,
//       notificationType: 'local',
//     };
//     // this.cancelLocalNotificationsWithType(type);
//     if (isAndroid) {
//       PushNotification.createChannel(
//         {
//           channelId: type,
//           channelName: type,
//           soundName: 'default',
//           importance: 4,
//           vibrate: true,
//         },
//         () => {
//           PushNotification.localNotificationSchedule({
//             channelId: type,
//             soundName: 'default',
//             importance: 4,
//             priority: 'high',
//             visibility: 'private',
//             smallIcon: 'ic_notification',
//             color: 'red',
//             ticker: type,
//             vibrate: true,
//             id: id,
//             message: message,
//             allowWhileIdle: false,
//             title,
//             date: new Date(Date.now() + date * 1000), // in date seconds.
//             repeatTime: 1,
//             showWhen: true,
//             when: new Date().getTime(),
//             userInfo,
//             number: this.notificationCount,
//           });
//         },
//       );
//     } else {
//       PushNotification.localNotificationSchedule({
//         soundName: 'default',
//         playSound: true,
//         number: this.notificationCount,
//         id: id,
//         message: message,
//         repeatTime: 1,
//         date: new Date(Date.now() + date * 1000),
//         allowWhileIdle: false,
//         title,
//         userInfo,
//       });
//     }
//   };
// }

// const services = new NotificationService();

// export default services;
