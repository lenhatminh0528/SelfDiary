/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Svgs from '../../../assets/images/svg';
import HeaderContainer from '../../components/headerContainer';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../constants/globalStyles';
import useMergeState from '../../../utils/useMergeState';
import SelectDate from './selectDate';
import moment from 'moment';
import DateTimeModal from '../../components/dateTimeModal';
import MessageCell from './messageCell';
import ButtonCT from '../../components/buttonCT';
import LoadingModal from '../../components/loadingModal';
import MessageModal from '../../components/messageModal';
import {useIsFocused} from '@react-navigation/core';
import {screenHeight} from '../../../utils';

const EditDetail = props => {
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  const {navigation, route} = props;
  const isFocused = useIsFocused();
  const item = route.params.item || {
    title: '',
    type: 'NEW',
    message: '',
    isNotify: false,
    timeNoti: 'DAILY',
    dateSelected: [],
    createdDate: moment().toISOString(),
  };

  const upDateList = route.params.upDateList;

  const [state, setState] = useMergeState({
    isSwitchOn: false,
    title: item.title || '',
    message: item.message || '',
    dateSelected: [],
    data: item || {},
    isShowModal: false,
    isShowLoading: false,
    isShowMessage: false,
  });

  useEffect(() => {
    if (isFocused) {
      getInit();
      const t = route.params.item;
      console.log('route param: ', t);
    }
  }, [isFocused]);

  const getInit = async () => {
    const dates = (await item.selectedDates) || [];
    setState({dateSelected: dates});
    if (dates.length > 0) {
      setState({isSwitchOn: true});
    }
    console.log('type: ', item.type);
  };

  const onHideModal = data => {
    if (state.isShowLoading) {
      setState({isShowLoading: false});
    } else {
      setState({isShowModal: false, dateSelected: data});
    }
  };

  const pressLeft = () => {
    setState({isShowMessage: true});
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

  const onPressDone = () => {
    setState({isShowLoading: true});
    setTimeout(() => {
      const data = {
        id: item.id,
        title: state.title,
        type: item.type,
        message: state.message,
        dateSelected: state.dateSelected,
        isNotify: false,
        timeNoti: 'DAILY',
        createdDate: moment().toISOString(),
      };
      navigation.goBack();
      upDateList(data);
    }, 3000);
  };

  const onPressConfirm = () => {
    navigation.goBack();
  };

  const onPressCancel = () => {
    setState({isShowMessage: false});
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
            // <TouchableOpacity
            //   onPress={onPressIconRight}
            //   style={styles.iconRight}>
            //   <SvgXml
            //     fill={'white'}
            //     width={20}
            //     height={20}
            //     xml={Svgs.ic_check}
            //   />
            // </TouchableOpacity>
            <ButtonCT
              onPress={onPressDone}
              containerStyle={{marginRight: 10}}
              type={'TEXTBOLD'}
              title={'DONE'}
            />
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
          styleContainer={{
            height: state.isSwitchOn ? screenHeight - 264 : screenHeight - 156,
          }}
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
      <LoadingModal
        onBackdropPress={onHideModal}
        isVisible={state.isShowLoading}
      />
      <MessageModal
        title={'Confirmation!'}
        cancelTitle={'Cancel'}
        confirmTitle={'Confirm'}
        message={'Do you wanna cancel the process! All data will be removed.'}
        onPressConfirm={onPressConfirm}
        onPressCancel={onPressCancel}
        isVisible={state.isShowMessage}
      />
    </View>
  );
};

export default EditDetail;
