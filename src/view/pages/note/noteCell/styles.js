import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
    opacity: 1,
    width: '100%',
    height: 75,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
  },
  titleContent: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  font16: {fontSize: 16},
  subContent: {},
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
