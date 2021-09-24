import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Svgs from '../../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../../constants/globalStyles';
import themedStyle from './styles';

const DateTimeCell = props => {
  const {styleContainer, date} = props;
  const [styles, theme] = useTheme(themedStyle);
  const [glbStyle] = useTheme(globalStyle);
  return (
    <TouchableOpacity style={[styles.container, styleContainer]}>
      <Text style={{marginRight: 5}}>{date}</Text>
      <SvgXml xml={Svgs.ic_close} width={10} height={10} fill={'red'} />
    </TouchableOpacity>
  );
};

DateTimeCell.defaultProps = {
  styleContainer: {},
};

DateTimeCell.propTypes = {
  styleContainer: PropTypes.object,
};

export default DateTimeCell;
