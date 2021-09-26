import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Svgs from '../../../assets/images/svg';
import HeaderContainer from '../../components/headerContainer';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../constants/globalStyles';
import {SvgXml} from 'react-native-svg';
import useMergeState from '../../../utils/useMergeState';
import SelectDate from './selectDate';
import moment from 'moment';
import DateTimeModal from '../../components/dateTimeModal';
import MessageCell from './messageCell';
import _ from 'lodash';

const DATA = {
  title: 'Title text 1',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
  isNotify: false,
  timeNoti: 'DAILY',
  dateNotify: [],
  createdDate: moment().toISOString(),
};

const EditDetail = props => {
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  const {navigation, route} = props;

  const {item, upDateList} = route.params || {
    item: {
      title: '',
      message: '',
      isNotify: false,
      timeNoti: 'DAILY',
      dateSelected: [],
      createdDate: moment().toISOString(),
    },
    upDateList: () => {},
  };

  const [state, setState] = useMergeState({
    isSwitchOn: false,
    title: item.title || '',
    message: item.message || '',
    dateSelected: item.dateSelected || [],
    data: item || {},
    isShowModal: false,
  });

  const onHideModal = data => {
    setState({isShowModal: false, dateSelected: data});
  };

  const pressLeft = () => {
    navigation.goBack();
  };

  const toggleSwitch = () => {
    setState({isSwitchOn: !state.isSwitchOn});
  };
  const onChooseDate = () => {
    setState({isShowModal: true});
  };

  const onChangeMessage = text => {
    setState({message: text});
  };

  const onChangeTitle = text => {
    setState({title: text});
  };

  const onPressIconRight = () => {
    console.log('press right');
    const data = {
      id: item.id,
      title: state.title,
      message: state.message,
      dateSelected: state.dateSelected,
      isNotify: false,
      timeNoti: 'DAILY',
      createdDate: moment().toISOString(),
    };
    navigation.goBack();
    upDateList(data);
  };

  return (
    <View style={glbStyle.flex1}>
      <HeaderContainer
        style={styles.header}
        onPressIconLeft={pressLeft}
        iconLeft={Svgs.back}
        title={'Edit detail'}
        iconRightContent={
          state.title !== '' &&
          state.message !== '' && (
            <TouchableOpacity
              onPress={onPressIconRight}
              style={styles.iconRight}>
              <SvgXml
                fill={'white'}
                width={20}
                height={20}
                xml={Svgs.ic_check}
              />
            </TouchableOpacity>
          )
        }
      />
      <ScrollView style={[glbStyle.flex1, styles.context]}>
        {/*DATE TIME */}
        <SelectDate
          dateSelected={state.dateSelected}
          isSwitchEnabled={state.isSwitchOn}
          toggleSwitch={toggleSwitch}
          onPressIcon={onChooseDate}
        />
        {/*CONTENT */}
        <MessageCell
          onChangeMessage={onChangeMessage}
          onChangeTitle={onChangeTitle}
          createdDate={moment(state.data.createdDate).format(
            'DD/MM/YY - HH-mm',
          )}
          title={state.title}
          message={state.message}
        />
      </ScrollView>
      <DateTimeModal
        data={state.dateSelected}
        isVisible={state.isShowModal}
        onBackdropPress={onHideModal}
      />
    </View>
  );
};

export default EditDetail;
