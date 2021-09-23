import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    backgroundColor: '#1565c0',
    alignItems: 'center',
    shadowColor: theme.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },
  paddingLeft10: {
    paddingLeft: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  marginLeft20: {
    marginLeft: 20,
  },
  paddingLeft20: {
    paddingLeft: 20,
  },
  iconLeft: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default themedStyles;
