import {styleSheetFactory} from '../../../../constants/themes';
import {screenHeight} from '../../../../utils';

const themedStyle = styleSheetFactory(theme => ({
  container: {
    flex: 1,
  },
  inputContext: {
    flex: 1,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 15,
  },
  lineBreak: {
    width: '90%',
    marginVertical: 10,
    height: 1,
    backgroundColor: 'green',
  },
  messageView: {
    flex: 1,
    height: screenHeight / 2,
  },
  messageInput: {
    flex: 1,
    overflow: 'scroll',
    flexWrap: 'wrap',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  createdDate: {
    textAlign: 'right',
  },
}));
export default themedStyle;
