import React, {useEffect} from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {Text} from 'react-native';
import AppNavigation from './view/navigations';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  return (
    <MenuProvider>
      <AppNavigation />
    </MenuProvider>
  );
};

export default App;
