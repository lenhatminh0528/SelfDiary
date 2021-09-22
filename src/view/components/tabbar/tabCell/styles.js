import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 5,
    paddingHorizontal: 16,
  },
  margin8: {
    marginRight: 8,
  },
  subContainer: {},
}));

export default themedStyles;
