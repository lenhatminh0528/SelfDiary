import React from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import themedStyles from './styles';
import globalStyle from '../../../constants/globalStyles';
import {useTheme} from 'react-native-themed-styles';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';

const HeaderContainer = props => {
  const {title, iconLeft, onPressIconLeft, iconRightContent} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 56,
        width: '100%',
        backgroundColor: '#1565c0',
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
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          !iconLeft && {marginLeft: 20},
          iconLeft && {paddingLeft: 20}, //paddingLeft de tang vung press - hit slop
          ,
        ]}>
        {iconLeft && (
          <SvgXml fill={theme.white} width={20} height={20} xml={iconLeft} />
        )}
      </TouchableOpacity>
      <View style={[{flex: 1}, iconLeft && {paddingStart: 10}]}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
          {title}
        </Text>
      </View>
      {iconRightContent && iconRightContent}
    </View>
  );
};
export default HeaderContainer;
