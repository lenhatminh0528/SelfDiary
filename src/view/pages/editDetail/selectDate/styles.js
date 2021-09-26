import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    backgroundColor: 'white',
    padding: 10,
    paddingRight: -10,
    borderRadius: 8,
    elevation: 8,
  },
  iconRight: {
    paddingRight: 20,
    marginLeft: 10,
  },
}));

export default themedStyles;
