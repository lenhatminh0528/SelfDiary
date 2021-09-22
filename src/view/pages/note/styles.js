import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    paddingRight: 20,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#1565c0',
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 6,
  },
  padding10: {
    padding: 10,
  },
}));
export default themedStyles;
