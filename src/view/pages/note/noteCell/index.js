import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Svgs from '../../../../assets/images/svg';
import themedStyles from './styles';
import globalStyle from '../../../../constants/globalStyles';
import {useTheme} from 'react-native-themed-styles';
import DateTimeCell from '../../editDetail/dateTimeCell';
import moment from 'moment';
const NoteCell = props => {
  const {item, onPress, onDelete} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.titleContent}>
        <Text style={glbStyles.font20}>{item.title}</Text>
        <View
        // style={{flexDirection: 'row', marginBottom: 5}}
        >
          {/* <TouchableOpacity
            style={{padding: 5, backgroundColor: '#d1c4e9', borderRadius: 8}}>
            <SvgXml
              xml={Svgs.ic_bell}
              fill={'#f44336'}
              width={16}
              height={16}
            />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => onDelete(item.id)}
            style={styles.icTrash}>
            <SvgXml
              xml={Svgs.ic_trash}
              fill={'#f44336'}
              width={16}
              height={16}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.messageText}>
        {item.message}
      </Text>
      <View style={styles.footer} />
      <View style={[glbStyles.flex1, styles.notiTime]}>
        {(item.dateSelected ?? []).map((date, index) => {
          return (
            <DateTimeCell
              isShowIcon={false}
              key={index}
              date={moment(date).format('DD-MM')}
            />
          );
        })}
      </View>
      <Text style={styles.createdDay}>
        {moment(item.createdDate).format('DD/MM/YY')}
      </Text>
    </TouchableOpacity>
  );
};

export default NoteCell;
