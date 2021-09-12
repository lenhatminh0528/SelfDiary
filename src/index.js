import React, {useEffect} from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {Text} from 'react-native';
import Navigations from './view/navigations';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <MenuProvider>
      <Navigations />
    </MenuProvider>
  );
};

export default App;
