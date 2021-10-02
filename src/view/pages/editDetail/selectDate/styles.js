import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    backgroundColor: 'white',
    padding: 10,
    paddingRight: -10,
    borderRadius: 8,
  },
  iconRight: {
    paddingRight: 20,
    marginLeft: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {fontSize: 20, fontWeight: 'bold'},
  selectDate: {
    marginVertical: 10,
    marginRight: 10,
    flex: 1,
    // width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subDate: {
    flexWrap: 'wrap',
    overflow: 'scroll',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    // backgroundColor: '#ffcdd2',
    marginRight: 10,
  },
}));

export default themedStyles;
