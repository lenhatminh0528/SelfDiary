import {styleSheetFactory} from './themes';

const globalStyle = styleSheetFactory(theme => ({
  flex1: {
    flex: 1,
  },
  font16: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  font20: {
    fontWeight: 'bold',
    fontSize: 20,
  },
}));

export default globalStyle;
