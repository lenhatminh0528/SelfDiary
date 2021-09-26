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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  emptyView: {
    alignItems: 'center',
    width: '100%',
    marginTop: 80,
  },
  imgNodocs: {
    width: 200,
    height: 170,
  },
}));
export default themedStyles;
