import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import Svgs from '../../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../../constants/globalStyles';
import themedStyles from './styles';
import DateTimeCell from '../dateTimeCell';
import moment from 'moment';

const SelectDate = props => {
  const {styleContainer, item, toggleSwitch, isSwitchEnabled, dateSelected} =
    props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  const [switchStatus, setSwitch] = useState(false);

  useEffect(() => {
    console.log('dateSelected: ', dateSelected);
  }, [dateSelected]);

  return (
    <View style={[styles.container, styleContainer]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Time notification
        </Text>
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
        <View
          style={{
            marginVertical: 10,
            marginRight: 10,
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={[
              glbStyle.flex1,
              {
                overflow: 'hidden',
                flexDirection: 'row',
                padding: 10,
                borderWidth: 1,
                borderColor: theme.gray_2,
                marginRight: 10,
              },
            ]}>
            {(dateSelected ?? []).map((date, index) => {
              return (
                <DateTimeCell key={index} date={moment(date).format('DD-MM')} />
              );
            })}
          </View>
          <SvgXml
            xml={Svgs.ic_calendar_1}
            width={30}
            height={30}
            fill={'blue'}
          />
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
};

SelectDate.propTypes = {
  styleContainer: PropTypes.object,
  isSwitchOn: PropTypes.bool,
  toggleSwitch: PropTypes.func,
  dateSelected: PropTypes.array,
};

export default SelectDate;
