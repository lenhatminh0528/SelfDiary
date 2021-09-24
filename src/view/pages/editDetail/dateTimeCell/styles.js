import {styleSheetFactory} from '../../../../constants/themes';

const themedStyle = styleSheetFactory(theme => ({
  container: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
}));
export default themedStyle;
