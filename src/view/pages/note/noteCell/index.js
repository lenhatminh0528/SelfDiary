import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Svgs from '../../../../assets/images/svg';
import themedStyles from './styles';
import globalStyle from '../../../../constants/globalStyles';
import {useTheme} from 'react-native-themed-styles';
import DateTimeCell from '../../editDetail/dateTimeCell';
import withObservables from '@nozbe/with-observables';
import moment from 'moment';

const NoteCell = props => {
  const {item, onPress, onDelete} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    getDates();
  }, []);

  const getDates = async () => {
    const dates = await item.selectedDates;
    setSelectedDates(dates);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.titleContent}>
          <Text style={glbStyles.font20}>{item.title}</Text>
          <View>
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
        {selectedDates.length > 0 && <View style={styles.footer} />}
        <View style={[glbStyles.flex1, styles.notiTime]}>
          {(selectedDates ?? []).map((date, index) => {
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
          {moment(item.timeCreated).format('DD/MM/YY')}
        </Text>
      </TouchableOpacity>
    </>
  );
};

// const enhance = withObservables(['note'], ({note}) => ({
//   note: note,
//   selectedDates: note.selectedDates,
// }));
export default NoteCell;
