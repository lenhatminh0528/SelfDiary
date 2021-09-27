import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
    opacity: 1,
    width: '100%',
    borderRadius: 10,
    // borderWidth: 1,
    marginVertical: 5,
    backgroundColor: theme.gray_5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // elevation: 10,
  },
  footer: {
    width: '100%',
    height: 1,
    backgroundColor: '#e35183',
    marginVertical: 10,
  },
  notiTime: {
    flexWrap: 'wrap',
    overflow: 'scroll',
    flexDirection: 'row',
  },
  createdDay: {
    alignSelf: 'flex-end',
  },
  icTrash: {
    padding: 10,
    backgroundColor: '#d1c4e9',
    borderRadius: 8,
    marginLeft: 10,
  },
  titleContent: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  messageText: {
    fontSize: 16,
    color: theme.gray_12,
    // lineHeight: 1,
    overflow: 'hidden',
  },
  subContent: {},
  iconRight: {
    paddingRight: 20,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#1565c0',
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 6,
  },
  padding10: {
    padding: 10,
  },
}));
export default themedStyles;
