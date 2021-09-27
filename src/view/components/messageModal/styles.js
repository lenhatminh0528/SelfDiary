import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containModal: {
    margin: 0,
    marginHorizontal: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  icon: {
    padding: 10,
    backgroundColor: '#f48fb1',
    borderRadius: 25,
    marginRight: 10,
  },
  cancel: {
    width: 130,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dae9fe',
    borderRadius: 28,
  },
  confirm: {
    width: 130,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: '#c4001d',
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  message: {
    marginVertical: 30,
    fontSize: 16,
    marginHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  container: {
    margin: 0,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    // marginHorizontal: 20,
    paddingHorizontal: 20,
  },
}));

export default themedStyles;
