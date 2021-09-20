import React, {useState, useEffect} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {EnumRouteName} from '../../../constants/routeName';
import InputCodeCT from '../../components/inputCodeCT';
import {SvgXml} from 'react-native-svg';
import Svgs from '../../../assets/images/svg';
import loadingModal from '../../components/loadingModal';
import useMergeState from '../../../utils/useMergeState';
import LoadingModal from '../../components/loadingModal';

const InitView = props => {
  const {navigation} = props;
  const CELL_COUNT = 4;
  const [code, setCode] = useState('');
  const [state, setState] = useMergeState({
    isLoading: false,
    isShowModal: false,
  });
  const onChangeText = text => {
    console.log('onchangeText: ', text);
    setCode(text);
    if (text.length === CELL_COUNT) {
      Keyboard.dismiss();
    }
    if (text.length === 4) {
      checkCode(text);
    }
  };
  const checkCode = text => {
    console.log('text: ', text);
    setState({isShowModal: true});
    setTimeout(() => {
      setState({isShowModal: false});
      navigation.navigate(EnumRouteName.dashBoard);
    }, 3000);
  };
  const onBackDrop = () => {
    setState({isShowModal: false});
  };
  return (
    <View
      style={{
        backgroundColor: '#f7fafe',
        flex: 1,
        alignItems: 'center',
        paddingTop: 150,
      }}>
      <SvgXml fill={'#f7fafe'} xml={Svgs.ic_lock} />
      <InputCodeCT
        customStyles={{width: '60%', marginTop: 100, marginBottom: 10}}
        value={code}
        cellCount={CELL_COUNT}
        onChangeText={onChangeText}
      />
      <Text style={{fontSize: 16}}>Enter your key code</Text>
      <LoadingModal
        onPressBackDrop={onBackDrop}
        isVisible={state.isShowModal}
      />
    </View>
  );
};

export default InitView;
