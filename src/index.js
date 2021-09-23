import React, {useEffect} from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import AppNavigation from './view/navigations';

const App = () => {
  return (
    <MenuProvider>
      <AppNavigation />
    </MenuProvider>
  );
};

export default App;
