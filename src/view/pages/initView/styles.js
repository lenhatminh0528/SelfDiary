import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(themed => ({
  container: {
    backgroundColor: '#f7fafe',
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
  },
  inputCode: {
    width: '60%',
    marginTop: 100,
    marginBottom: 10,
  },
}));

export default themedStyles;
