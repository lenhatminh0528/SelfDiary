import {styleSheetFactory} from '../../../../constants/themes';

const themedStyle = styleSheetFactory(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef5350',
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginRight: 8,
    borderRadius: 8,
    marginBottom: 5,
  },
  iconRight: {
    padding: 4,
    backgroundColor: '#6d6d6d',
    borderRadius: 10,
  },
  date: {
    color: 'white',
    fontSize: 13,
  },
  marginRight: {
    marginRight: 5,
  },
}));
export default themedStyle;
