import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Svgs from '../../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../../constants/globalStyles';
import themedStyle from './styles';

const DateTimeCell = props => {
  const {styleContainer, date, isShowIcon} = props;
  const [styles, theme] = useTheme(themedStyle);
  const [glbStyle] = useTheme(globalStyle);
  return (
    <TouchableOpacity style={[styles.container, styleContainer]}>
      <Text style={[styles.date, isShowIcon && styles.marginRight]}>
        {date}
      </Text>
      {isShowIcon && (
        <TouchableOpacity style={styles.iconRight}>
          <SvgXml xml={Svgs.ic_close} width={8} height={8} fill={'white'} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

DateTimeCell.defaultProps = {
  styleContainer: {},
  isShowIcon: true,
};

DateTimeCell.propTypes = {
  styleContainer: PropTypes.object,
  isShowIcon: PropTypes.bool,
};

export default DateTimeCell;
