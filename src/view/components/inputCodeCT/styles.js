import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    alignSelf: 'center',
  },
}));

export default themedStyles;
