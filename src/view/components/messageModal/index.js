import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../constants/globalStyles';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';

const MessageModal = props => {
  const {
    style,
    isVisible,
    onPressBackDrop,
    icon,
    title,
    message,
    onPressConfirm,
    onPressCancel,
    confirmStyle,
    confirmTitle,
    cancelStyle,
    cancelTitle,
  } = props;
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
      coverScreen={true}
      onDismiss={onPressBackDrop}
      onBackdropPress={onPressBackDrop}
      statusBarTranslucent={true}
      style={styles.containModal}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icon}>
            <SvgXml xml={Svgs.cancel} width={25} height={25} />
          </TouchableOpacity>
          <Text style={glbStyle.font20}>{title}</Text>
        </View>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.footer}>
          {cancelTitle && (
            <TouchableOpacity
              onPress={onPressCancel}
              style={[styles.cancel, cancelStyle]}>
              <Text style={[glbStyle.font16, {color: theme.gray_12}]}>
                {cancelTitle}
              </Text>
            </TouchableOpacity>
          )}
          {confirmTitle && (
            <TouchableOpacity
              onPress={onPressConfirm}
              style={[styles.confirm, confirmStyle]}>
              <Text style={[glbStyle.font16, {color: theme.white}]}>
                {confirmTitle}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;
