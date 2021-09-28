import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, FlatList, Text, Image} from 'react-native';
import HeaderContainer from '../../components/headerContainer';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import ButtonCT from '../../components/buttonCT';
import NoteCell from './noteCell';
import themedStyles from './styles';
import globalStyle from '../../../constants/globalStyles';
import {useTheme} from 'react-native-themed-styles';
import {EnumRouteName} from '../../../constants/routeName';
import useMergeState from '../../../utils/useMergeState';
import PNG from '../../../assets/images/png';
import MessageModal from '../../components/messageModal';
import moment from 'moment';
import {pushNoti} from '../../../utils';
import PushNotificationComponent from '../../components/pushNotification';

const DATA = [
  {
    id: 1,
    title: 'title 1',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
    createdDate: moment().toISOString(),
    dateSelected: ['2021-09-09', '2021-09-19', '2021-09-10', '2021-09-11'],
  },
  // {
  //   id: 2,
  //   title: 'title 2',
  //   message: 'content of title 2',
  // },
  // {
  //   id: 3,
  //   title: 'title 3',
  //   message: 'content of title 3',
  // },
  // {
  //   id: 4,
  //   title: 'title 3',
  //   message: 'content of title 3',
  // },
  // {
  //   id: 5,
  //   title: 'title 3',
  //   message: 'content of title 3',
  // },
  // {
  //   id: 6,
  //   title: 'title 3',
  //   message: 'content of title 3',
  // },
  // {
  //   id: 7,
  //   title: 'title 3',
  //   message: 'content of title 3',
  // },
];

const NoteScreen = props => {
  const {navigation} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);

  const [state, setState] = useMergeState({
    data: DATA,
    isShowModal: false,
    deletedId: '',
  });

  const onPressItem = item => {
    pushNoti();
    // navigation.navigate(EnumRouteName.EditDetail, {
    //   item,
    //   upDateList: upDateList,
    // });
  };

  const onPressConfirm = () => {
    const newData = [...state.data];
    const index = newData.findIndex(obj => obj.id === state.deletedId);
    newData.splice(index, 1);
    setState({data: newData, isShowModal: false, deletedId: ''});
  };

  const onPressCancel = () => {
    setState({isShowModal: false});
  };

  const onPressAddNew = () => {
    navigation.navigate(EnumRouteName.EditDetail, {
      item: {
        id: state.data.length >= 0 ? state.data.length + 1 : 0,
        title: '',
        context: '',
        createdDate: moment().toISOString(),
        dateSelected: [],
      },
      upDateList: upDateList,
    });
  };

  const upDateList = item => {
    const newData = [...state.data];
    if (state.data.some(obj => obj.id === item.id)) {
      const index = state.data.findIndex(obj => obj.id === item.id);
      newData[index].title = item.title;
      newData[index].message = item.message;
      newData[index].dateSelected = item.dateSelected;
    } else {
      newData.push(item);
    }

    setState({data: newData});
  };

  const onPressDelete = id => {
    setState({isShowModal: true, deletedId: id});
  };

  const renderItem = ({item}) => (
    <NoteCell
      onDelete={onPressDelete}
      onPress={() => onPressItem(item)}
      item={item}
    />
  );

  const renderEmpty = () => {
    return (
      <View style={styles.emptyView}>
        <Image
          style={styles.imgNodocs}
          source={PNG.noDocuments}
          resizeMode="contain"
        />
        <Text style={[glbStyles.font20, {color: theme.gray_10}]}>
          Empty Schedule List...
        </Text>
        <Text style={[glbStyles.font16, {color: theme.gray_10}]}>
          You haven't created any list schedule text!
        </Text>
      </View>
    );
  };

  return (
    <View style={[glbStyles.flex1, {backgroundColor: theme.white}]}>
      <PushNotificationComponent />
      <HeaderContainer
        title={'Note Screen'}
        // iconRightContent={
        //   <TouchableOpacity style={styles.iconRight}>
        //     <SvgXml fill={'white'} width={20} height={20} xml={Svgs.ic_trash} />
        //   </TouchableOpacity>
        // }
      />
      <FlatList
        data={state.data}
        keyExtractor={item => item?.id}
        contentContainerStyle={styles.padding10}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
      />
      <ButtonCT
        containerStyle={styles.button}
        type="ICON"
        iconColor={theme.white}
        onPress={onPressAddNew}
        icon={Svgs.ic_add}
      />
      <MessageModal
        title={'Confirmation!'}
        cancelTitle={'No'}
        confirmTitle={'Yes'}
        message={'Do you want to delete this note'}
        onPressCancel={onPressCancel}
        onPressConfirm={onPressConfirm}
        isVisible={state.isShowModal}
      />
    </View>
  );
};
NoteScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    popToTop: PropTypes.func,
  }),
};

export default NoteScreen;
