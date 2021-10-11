import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
// import Switch from 'react-native-switch-pro';
import Svgs from '../../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../../constants/globalStyles';
import themedStyles from './styles';
import DateTimeCell from '../dateTimeCell';
import moment from 'moment';

const SelectDate = props => {
  const {
    styleContainer,
    toggleSwitch,
    isSwitchEnabled,
    dateSelected,
    onPressIcon,
  } = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);

  return (
    <View style={[styles.container, styleContainer]}>
      <View style={styles.title}>
        <Text style={glbStyle.font20}>Time notification</Text>
        <Switch
          value={isSwitchEnabled}
          onValueChange={toggleSwitch}
          ios_backgroundColor={theme.white}
          // trackColor={'red'}
          thumbColor={!isSwitchEnabled ? theme.gray_2 : theme.blue}
          style={{
            transform: [{scaleX: 0.8}, {scaleY: 0.8}],
          }}
        />
      </View>
      {isSwitchEnabled && (
        <View style={styles.selectDate}>
          <View style={[glbStyle.flex1, styles.subDate]}>
            {(dateSelected ?? []).map((date, index) => {
              return (
                <DateTimeCell key={index} date={moment(date).format('DD-MM')} />
              );
            })}
          </View>
          <TouchableOpacity onPress={onPressIcon}>
            <SvgXml
              xml={Svgs.ic_calendar_1}
              width={30}
              height={30}
              fill={'blue'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

SelectDate.defaultProps = {
  styleContainer: {},
  isSwitchOn: false,
  toggleSwitch: () => {},
  dateSelected: [],
  onPressIcon: () => {},
};

SelectDate.propTypes = {
  styleContainer: PropTypes.object,
  isSwitchOn: PropTypes.bool,
  toggleSwitch: PropTypes.func,
  dateSelected: PropTypes.array,
  onPressIcon: PropTypes.func,
};

export default SelectDate;
