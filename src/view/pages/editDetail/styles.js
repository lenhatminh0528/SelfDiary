import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
  },
  iconRight: {
    paddingRight: 20,
    marginLeft: 10,
  },
}));

export default themedStyles;
