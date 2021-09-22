import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import Svgs from '../../../../assets/images/svg';
import globalStyle from '../../../../constants/globalStyles';
import {SvgXml} from 'react-native-svg';

const TabCell = props => {
  const {
    title,
    icon,
    onPress,
    containerStyle,
    isFocused,
    iconColor,
    titleColor,
  } = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);
  const backgroundColor = isFocused ? 'pink' : 'white';
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor}, containerStyle]}
      hitSlop={{left: 10, right: 10, top: 5, bottom: 5}}>
      <SvgXml
        style={styles.margin8}
        xml={icon}
        width={20}
        height={20}
        fill={iconColor}
      />
      <Text style={[glbStyles.font16, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

TabCell.defaultProps = {
  title: '',
  icon: Svgs.ic_user,
  onPress: () => {},
  containerStyle: {},
  isFocused: false,
};

TabCell.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
  isFocused: PropTypes.bool,
};

export default TabCell;
