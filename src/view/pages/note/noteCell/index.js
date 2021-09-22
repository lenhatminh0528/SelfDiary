import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Svgs from '../../../../assets/images/svg';
import themedStyles from './styles';
import globalStyle from '../../../../constants/globalStyles';
import {useTheme} from 'react-native-themed-styles';

const NoteCell = props => {
  const {item, onPressCell} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);
  return (
    <TouchableOpacity onPress={onPressCell} style={styles.container}>
      <View style={styles.titleContent}>
        <Text style={glbStyles.font20}>{item.title}</Text>
        <SvgXml xml={Svgs.ic_bell} fill={'#1565c0'} width={16} height={16} />
      </View>
      <Text style={styles.font16}>{item.context}</Text>
    </TouchableOpacity>
  );
};

export default NoteCell;
