import {StyleSheet} from 'react-native';
import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
  },
}));
export default themedStyles;
