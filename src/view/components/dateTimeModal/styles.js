import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  calendar: {
    backgroundColor: 'transparent',
    marginHorizontal: -4.5,
  },
  monthChange: {
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  dayLabel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    // marginHorizontal: 3,
  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#e53935',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textCalendarWeek: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.black,
    flex: 1,
    textAlign: 'center',
  },
}));

export default themedStyles;
