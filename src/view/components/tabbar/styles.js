import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
    width: '100%',
    hadowOpacity: 1,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
  },
}));

export default themedStyles;
