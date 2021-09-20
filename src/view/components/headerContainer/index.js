import React from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import themedStyles from './styles';
import globalStyle from '../../../constants/globalStyles';
import {useTheme} from 'react-native-themed-styles';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';

const HeaderContainer = props => {
  const {title, iconLeft, onPressIconLeft} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 56,
        width: '100%',
        backgroundColor: 'pink',
        alignItems: 'center',
        shadowColor: theme.shadow,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
      }}>
      <TouchableOpacity
        hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
        onPress={onPressIconLeft}
        disabled={!iconLeft}
        style={[
          {
            backgroundColor: 'yellow',
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          !iconLeft && {marginLeft: 20},
          iconLeft && {paddingLeft: 20},  //paddingLeft de tang vung press - hit slop
          ,
        ]}>
        {iconLeft && (
          <SvgXml fill={theme.black} width={20} height={20} xml={iconLeft} />
        )}
      </TouchableOpacity>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
};
export default HeaderContainer;
