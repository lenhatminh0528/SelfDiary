import {styleSheetFactory} from './themes';

const globalStyle = styleSheetFactory(theme => ({
  flex1: {
    flex: 1,
  },
}));

export default globalStyle;
