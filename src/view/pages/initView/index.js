import React, {useState, useEffect} from 'react';
import {View, Text, Keyboard} from 'react-native';
import InputCodeCT from '../../components/inputCodeCT';
import {SvgXml} from 'react-native-svg';
import Svgs from '../../../assets/images/svg';
import useMergeState from '../../../utils/useMergeState';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import LoadingModal from '../../components/loadingModal';
import emitter from '../../../utils/emitter';
import {EmitterKey} from '../../../constants';
import globalStyle from '../../../constants/globalStyles';

const InitView = props => {
  const CELL_COUNT = 4;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);
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
      emitter.emit(EmitterKey.CHANGE_STATUS, {isAuthorized: true});
    }, 3000);
  };

  const onBackDrop = () => {
    setState({isShowModal: false});
  };

  return (
    <View style={styles.container}>
      <SvgXml fill={'#f7fafe'} xml={Svgs.ic_lock} />
      <InputCodeCT
        customStyles={styles.inputCode}
        value={code}
        cellCount={CELL_COUNT}
        onChangeText={onChangeText}
      />
      <Text style={glbStyles.font16}>Enter your key code</Text>
      <LoadingModal
        onPressBackDrop={onBackDrop}
        isVisible={state.isShowModal}
      />
    </View>
  );
};

export default InitView;
