import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import themedStyles from './styles';
import globalStyle from '../../../constants/globalStyles';
import {useTheme} from 'react-native-themed-styles';

const ButtonCT = props => {
  const {containerStyle, title, icon, onPress, type, iconColor} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);
  if (type === 'ICON') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, containerStyle]}>
        {!!icon && (
          <SvgXml xml={icon} width={30} height={30} fill={iconColor} />
        )}
        {!!title && <Text>{title}</Text>}
      </TouchableOpacity>
    );
  }
  if (type === 'TEXTBOLD') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, containerStyle]}>
        {!!title && (
          <Text style={[glbStyles.font16, {color: theme.white}]}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
};

ButtonCT.defaultProps = {
  containerStyle: {},
  title: '',
  icon: Svgs.ic_user,
  onPress: () => {},
  type: '',
  iconColor: '',
};
ButtonCT.propTypes = {
  containerStyle: PropTypes.object,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
};
export default ButtonCT;
