import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, Text, Image} from 'react-native';
import HeaderContainer from '../../components/headerContainer';
import Svgs from '../../../assets/images/svg';
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
import withObservables from '@nozbe/with-observables';
import {database} from '../../../constants/localStorageModal/database';
import {update} from 'lodash';

const DATA = [
  {
    id: 1,
    title: 'title 1',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
    createdDate: moment().toISOString(),
    dateSelected: ['2021-09-09', '2021-09-19', '2021-09-10', '2021-09-11'],
  },
  {
    id: 2,
    title: 'title 2',
    message: 'content of title 2',
    createdDate: moment().add(1, 'month').toISOString(),
    dateSelected: ['2021-08-09', '2021-09-20'],
  },
  {
    id: 3,
    title: 'title 3',
    message: 'content of title 3',
    createdDate: moment().add(1, 'year').toISOString(),
    dateSelected: ['2021-08-09', '2021-07-25'],
  },
  {
    id: 4,
    title: 'title 3',
    message: 'content of title 3',
    createdDate: moment().add(2, 'month').toISOString(),
    dateSelected: ['2021-03-20', '2021-11-20'],
  },
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

const createData = () => {
  try {
    database.write(async action => {
      const p = [];
      const sd = [];
      // await action.subAction(() => database.unsafeResetDatabase());      //subaction is deprecated
      // await database.unsafeResetDatabase();
      DATA.forEach(data => {
        // Database.get(tableName) is now a shortcut for Database.collections.get(tableName)
        const t = database.get('notes').prepareCreate(note => {
          note.title = data.title;
          note.message = data.message;
          note.timeCreated = data.createdDate;
        });
        p.push(t);
        data.dateSelected.forEach(date => {
          const d = database.get('selectedDates').prepareCreate(selected => {
            selected.date = moment(date).toDate();
            selected.note.set(t);
          });
          sd.push(d);
        });
      });
      const all = [...p, ...sd];
      database.batch(...all);
      return all.length;
    });

    // DATA.forEach(data => {
    //   database.write(async action => {
    //     console.log('actions: ', action);
    //     console.log('1');
    //     // await action.subAction(() => database.unsafeResetDatabase());      //subaction is deprecated
    //     action.callReader(() => database.unsafeResetDatabase());
    //     console.log('2');
    //     const n = database.get('notes').prepareCreate(note => {
    //       note.title = data.title;
    //       note.message = data.message;
    //       note.timeCreated = data.createdDate;
    //     });

    //   });
    // });
    console.log('createData successful');
  } catch (error) {
    console.log('error create data: ', error);
  }
};

const NoteScreen = props => {
  const {navigation, notes} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);
  const [state, setState] = useMergeState({
    // data: DATA,
    data: notes || [],
    isShowModal: false,
    deletedId: '',
  });

  // useEffect(() => {
  //   createData();
  // }, []);

  const onPressItem = async item => {
    // pushNoti();
    navigation.navigate(EnumRouteName.EditDetail, {
      item,
      upDateList: upDateList,
    });
    // const data = await database
    //   .get('notes')
    //   // .query(Q.where('title', Q.like(`%${Q.sanitizeLikeString('title 1')}%`)));
    //   .query();
    // const date = await database.get('selectedDates').query();
    // const child = await data[0].selectedDates; //chi co the goi child = cach await them 1 thang khac chu khong dung truc tiep data[0].selected_dates
    // console.log('notedatafet: ', data[0].selectedDates);
    // console.log('child: ', child);
    // console.log('notedatafet: ', data[1].title);
    // console.log('notedatafet: ', data[1].message);
    // console.log('notedatafet: ', data[1].timeCreated);
    // console.log('notedatafet: ', data[1].selectedDates);

    // console.log('date: ', moment(date[0].date).format('YYYY-MM-DD'));
    // console.log('date0: ', date[0]);
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
      // item: {
      //   // id: state.data.length >= 0 ? state.data.length + 1 : 0,
      //   title: '',
      //   context: '',
      //   createdDate: moment().toISOString(),
      //   dateSelected: [],
      // },
      upDateList: upDateList,
    });
  };

  const upDateList = async item => {
    console.log('item: ', item);
    console.log('item: ', item.dateSelected);
    database.write(async () => {
      if (item.type === 'NEW') {
        const note = database.get('notes').prepareCreate(newNote => {
          newNote.title = item.title;
          newNote.message = item.message;
          newNote.timeCreated = item.createdDate;
        });
        const updateDates = [];
        if (item.dateSelected.length > 0) {
          item.dateSelected.forEach(time => {
            const updateSelectedDates = database
              .get('selectedDates')
              .prepareCreate(date => {
                date.date = time;
                date.note.set(note);
              });
            updateDates.push(updateSelectedDates);
          });
        }
        const all = [...[note], ...updateDates];
        console.log('all: ', all);
        database.batch(...all);
        return all;
      } else {
        // const note = database.get('notes').find(item.id);
        // const updateNote = note.prepareUpdate(data => {
        //   data.title = item.data;
        //   data.message = item.message;
        // });
        // const updateSelectedDates = database.get('selectedDates').;
      }
    });

    // const newData = [...state.data];
    // if (state.data.some(obj => obj.id === item.id)) {
    //   const index = state.data.findIndex(obj => obj.id === item.id);
    //   newData[index].title = item.title;
    //   newData[index].message = item.message;
    //   newData[index].dateSelected = item.dateSelected;
    // } else {
    //   newData.push(item);
    // }

    // setState({data: newData});
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
        data={notes}
        keyExtractor={item => item.id}
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

const enhance = withObservables(
  ['notes'],
  ({}) => ({
    notes: database.get('notes').query(),
  }),
  // {
  //   const observables = ['id', 'title', 'message'];
  //   return {
  //     notes: database.get('notes').query().observeWithColumns(observables),
  //   };
  // }
);
export default enhance(NoteScreen);
