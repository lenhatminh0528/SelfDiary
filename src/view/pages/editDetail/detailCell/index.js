import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import Svgs from '../../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../../constants/globalStyles';
import themedStyle from './styles';

/**
 * @param type: "TITLE", "DATETIME", "MESSAGE"
 */

const DetailCell = props => {
  const {type, styleContainer} = props;
  const [styles, theme] = useTheme(themedStyle);
  const [glbStyle] = useTheme(glbStyle);
  return (
    <View style={[styles.container, styleContainer]}>
      <Text>detailCell</Text>
    </View>
  );
};

DetailCell.defaultProps = {
  type: 'TITLE',
  styleContainer: {},
};

DetailCell.propTypes = {
  type: PropTypes.string,
  styleContainer: PropTypes.object,
};

export default DetailCell;
