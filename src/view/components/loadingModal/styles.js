import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containModal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default themedStyles;
