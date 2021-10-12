import React, {useEffect} from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import AppNavigation from './view/navigations';
// import PushNotificationComponent from './view/components/pushNotification';
const App = () => {
  return (
    <MenuProvider>
      <AppNavigation />
    </MenuProvider>
  );
};

export default App;
