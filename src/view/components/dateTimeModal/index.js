import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import globalStyle from '../../../constants/globalStyles';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import useMergeState from '../../../utils/useMergeState';

const minDate = moment('1999-01-01').toDate();
const maxDate = moment().add(10, 'year').toDate();

const DateTimeModal = props => {
  const {isVisible, onBackdropPress, data} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);

  const [state, setState] = useMergeState({
    selectedDate: moment().toDate(),
    viewingMonth: moment().toDate(),
    listSelectedDate: data,
  });

  const onMonthChange = date => {
    const newDate = moment(date.dateString, 'YYYY-MM-DD').toDate();
    setState({viewingMonth: newDate});
  };

  const weeksCount = function (date) {
    //Count number of week in one month to get height of calender.
    const year = moment(date).year();
    const month_number = moment(date).month() + 1;
    const firstOfMonth = new Date(year, month_number - 1, 1);
    let day = firstOfMonth.getDay() || 6;
    day = day === 1 ? 0 : day;
    if (day) {
      day--;
    }
    let diff = 7 - day;
    const lastOfMonth = new Date(year, month_number, 0);
    const lastDate = lastOfMonth.getDate();
    if (lastOfMonth.getDay() === 1) {
      diff--;
    }
    var result = Math.ceil((lastDate - diff) / 7) + 1;
    if (result >= 6) {
      return 397;
    } else {
      return 350;
    }
    // return result + 1;
  };

  const onPressBackDrop = () => {
    onBackdropPress(state.listSelectedDate);
  };

  const renderCalenderHeader = ({month, addMonth}) => {
    return (
      <>
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                addMonth(-1);
              }}
              style={styles.monthChange}>
              <SvgXml
                xml={Svgs.ic_arrow2}
                width={15}
                height={15}
                fill={'white'}
                style={{transform: [{rotateZ: '180deg'}]}}
              />
            </TouchableOpacity>
            <Text style={[glbStyle.font20, {color: theme.white}]}>
              {month.toString('MMMM yyyy')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                addMonth(1);
              }}
              style={styles.monthChange}>
              <SvgXml
                xml={Svgs.ic_arrow2}
                width={15}
                height={15}
                fill={'white'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dayLabel}>
            <Text style={styles.textCalendarWeek}>Mon</Text>
            <Text style={styles.textCalendarWeek}>Tue</Text>
            <Text style={styles.textCalendarWeek}>Wed</Text>
            <Text style={styles.textCalendarWeek}>Thu</Text>
            <Text style={styles.textCalendarWeek}>Fri</Text>
            <Text style={styles.textCalendarWeek}>Sat</Text>
            <Text style={styles.textCalendarWeek}>Sun</Text>
          </View>
        </View>
      </>
    );
  };

  const onDatePress = date => {
    let currentList = [...state.listSelectedDate];
    if (
      moment().isAfter(moment(date.dateString), 'month') ||
      moment(date.dateString).date() <= moment().date()
    ) {
      console.log('you cannot choose old days to study!');
    } else {
      if (
        state.listSelectedDate.includes(
          moment(date.dateString).format('YYYY-MM-DD'),
        )
      ) {
        const index = currentList.findIndex(
          value => value === moment(date.dateString).format('YYYY-MM-DD'),
        );
        currentList.splice(index, 1);
      } else {
        currentList.push(moment(date.dateString).format('YYYY-MM-DD'));
      }
      setState({listSelectedDate: currentList});
    }
  };

  const markedDates = () => {
    // let daysInMonth = moment(state.viewingMonth).daysInMonth();
    // let current = moment(state.viewingMonth).date(daysInMonth);
    const marker = {};
    if (moment(state.viewingMonth).isSameOrAfter(moment(), 'month')) {
      state.listSelectedDate.forEach(date => {
        marker[date] = {
          customStyles: {
            container: {
              borderWidth: 1,
              borderRadius: 7,
              borderColor: 'orange',
              backgroundColor: 'orange',
            },
          },
          selected: true,
        };
      });
    }
    return marker;
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      statusBarTranslucent={true}
      animationInTiming={300}
      onBackdropPress={onPressBackDrop}
      animationOut="slideOutDown"
      animationOutTiming={300}
      style={styles.modalContainer}>
      <View>
        <Calendar
          style={[
            {
              height: weeksCount(state.viewingMonth),
            },
            styles.calendar,
          ]}
          onDayPress={onDatePress}
          onMonthChange={onMonthChange}
          minDate={minDate}
          maxDate={maxDate}
          firstDay={1}
          // hideExtraDays={true}
          customHeader={renderCalenderHeader}
          markedDates={markedDates()}
          markingType={'custom'}
          theme={{
            dayTextColor: 'brown',
            monthTextColor: theme.blue,
            textDayFontWeight: 'bold',
            textDayFontFamily: 'OpenSans-semiBold',
            textMonthFontFamily: 'OpenSans-semiBold',
            'stylesheet.day.multiDot': {
              text: {
                fontSize: 16,
                fontFamily: 'OpenSans-SemiBold',
              },
              selected: {
                width: '60%',
                // borderRadius: 999,
                backgroundColor: 'green',
              },
              base: {
                width: '96%',
                marginVertical: '2%',
                aspectRatio: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.coalLightest,
              },
              selectedDate: {},
              selectedText: {
                color: 'yellow',
              },
              today: {
                width: '60%',
                marginVertical: '20%',
                backgroundColor: 'black',
                // borderRadius: 999,
              },
              todayText: {
                color: 'green',
              },
            },
            'stylesheet.calendar.main': {
              container: {
                paddingLeft: 0,
                paddingRight: 0,
              },
            },
          }}
        />
      </View>
    </Modal>
  );
};

DateTimeModal.propTypes = {
  isVisible: PropTypes.bool,
  onBackdropPress: PropTypes.func,
};

DateTimeModal.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {},
};

export default DateTimeModal;
