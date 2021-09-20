import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';

const ButtonCT = props => {
  const {containerStyle, title, icon, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: 'brown',
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle,
      ]}>
      {icon && <SvgXml xml={icon} width={30} height={30} fill={'black'} />}
      {title && <Text>{title}</Text>}
    </TouchableOpacity>
  );
};

export default ButtonCT;
