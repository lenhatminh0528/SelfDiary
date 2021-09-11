import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {Text} from 'react-native';
import Navigations from './view/navigations';
const App = () => {
  return (
    <MenuProvider>
      <Navigations />
    </MenuProvider>
  );
};

export default App;
