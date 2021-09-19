import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import themedStyles from '../loadingModal/styles';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../constants/globalStyles';
const LoadingModal = props => {
  const {style, isVisible, onPressBackDrop} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  return (
    <Modal
      isVisible={isVisible}
      animationType="none"
      transparent={true}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onDismiss={onPressBackDrop}
      onBackdropPress={onPressBackDrop}
      statusBarTranslucent={true}
      style={styles.containModal}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: 18,
          width: 100,
          height: 100,
        }}>
        <ActivityIndicator />
        <Text style={{marginTop: 10}}>Loading...</Text>
      </View>
    </Modal>
  );
};

export default LoadingModal;
