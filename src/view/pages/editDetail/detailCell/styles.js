import {styleSheetFactory} from '../../../../constants/themes';

const themedStyle = styleSheetFactory(theme => ({
  container: {
    flex: 1,
  },
}));
export default themedStyle;
