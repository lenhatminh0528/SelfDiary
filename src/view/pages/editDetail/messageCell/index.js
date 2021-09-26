import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import Svgs from '../../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../../constants/globalStyles';
import themedStyle from './styles';

/**
 * @param type: "TITLE", "DATETIME", "MESSAGE"
 */

const MessageCell = props => {
  const {
    type,
    styleContainer,
    message,
    title,
    createdDate,
    onChangeTitle,
    onChangeMessage,
  } = props;
  const [styles, theme] = useTheme(themedStyle);
  const [glbStyle] = useTheme(globalStyle);
  return (
    <View style={styles.inputContext}>
      <TextInput
        onChangeText={onChangeTitle}
        value={title}
        style={glbStyle.font20}
      />
      <View style={styles.lineBreak} />
      <View style={styles.messageView}>
        <TextInput
          value={message}
          onChangeText={onChangeMessage}
          multiline={true}
          textAlignVertical="top"
          numberOfLines={15}
          disableFullscreenUI={false}
          style={[styles.messageInput, glbStyle.font16]}
          placeholder={'Write something here...'}
        />
        <Text style={styles.createdDate}>{createdDate}</Text>
      </View>
    </View>
  );
};

MessageCell.defaultProps = {
  type: 'TITLE',
  styleContainer: {},
};

MessageCell.propTypes = {
  type: PropTypes.string,
  styleContainer: PropTypes.object,
};

export default MessageCell;
