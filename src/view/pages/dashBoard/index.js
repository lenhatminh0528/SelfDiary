import React from 'react';
import {View, Text} from 'react-native';
import HeaderContainer from '../../components/headerContainer';
import Svgs from '../../../assets/images/svg';

const DashBoard = () => {
  const pressLeft = () => {
    console.log('press left');
  };
  return (
    <View>
      <HeaderContainer
        onPressIconLeft={pressLeft}
        iconLeft={Svgs.back}
        title={'dash board'}
      />
    </View>
  );
};

export default DashBoard;
