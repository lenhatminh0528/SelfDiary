import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import globalStyle from '../../../constants/globalStyles';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import {SvgXml} from 'react-native-svg';

const HeaderContainer = props => {
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  const {title, iconLeft, onPressIconLeft, iconRightContent, style} = props;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
        onPress={onPressIconLeft}
        disabled={!iconLeft}
        style={[
          styles.iconLeft,
          !iconLeft && styles.marginLeft20,
          iconLeft && styles.paddingLeft20,
        ]}>
        {iconLeft && (
          <SvgXml fill={theme.white} width={25} height={25} xml={iconLeft} />
        )}
      </TouchableOpacity>
      <View style={[glbStyle.flex1, iconLeft && styles.paddingLeft10]}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {iconRightContent && iconRightContent}
    </View>
  );
};
export default HeaderContainer;
