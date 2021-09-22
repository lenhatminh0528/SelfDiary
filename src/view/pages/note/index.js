import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import HeaderContainer from '../../components/headerContainer';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import ButtonCT from '../../components/buttonCT';
import NoteCell from './noteCell';
import themedStyles from './styles';
import globalStyle from '../../../constants/globalStyles';
import {useTheme} from 'react-native-themed-styles';
import {EnumRouteName} from '../../../constants/routeName';
import {useNavigation} from '@react-navigation/native';
const DATA = [
  {
    id: 1,
    title: 'title 1',
    context: 'content of title 1',
  },
  {
    id: 2,
    title: 'title 2',
    context: 'content of title 2',
  },
  {
    id: 3,
    title: 'title 3',
    context: 'content of title 3',
  },
  {
    id: 4,
    title: 'title 3',
    context: 'content of title 3',
  },
  {
    id: 5,
    title: 'title 3',
    context: 'content of title 3',
  },
  {
    id: 6,
    title: 'title 3',
    context: 'content of title 3',
  },
  {
    id: 7,
    title: 'title 3',
    context: 'content of title 3',
  },
  {
    id: 8,
    title: 'title 3',
    context: 'content of title 3',
  },
  {
    id: 9,
    title: 'title 3',
    context: 'content of title 3',
  },
  {
    id: 10,
    title: 'title 3',
    context: 'content of title 3',
  },
  {
    id: 11,
    title: 'title 3',
    context: 'content of title 3',
  },
];

const NoteScreen = props => {
  const {navigation} = props;
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyle);
  // const navigation = useNavigation();

  const pressLeft = () => {
    console.log('press left');
  };

  const onPressItem = item => {
    console.log('press', item);
    console.log('press', navigation);
    navigation.natvigate(EnumRouteName.EditDetail, {item});
  };

  const renderItem = ({item}) => (
    <NoteCell onPressCell={() => onPressItem(item)} item={item} />
  );

  const onPressAddNew = () => {
    console.log('add new: ');
  };

  return (
    <View style={glbStyles.flex1}>
      <HeaderContainer
        onPressIconLeft={pressLeft}
        iconLeft={Svgs.back}
        title={'dash board'}
        iconRightContent={
          <TouchableOpacity style={styles.iconRight}>
            <SvgXml fill={'white'} width={20} height={20} xml={Svgs.ic_trash} />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={DATA}
        keyExtractor={item => item?.id}
        contentContainerStyle={styles.padding10}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <ButtonCT
        containerStyle={styles.button}
        type="ICON"
        iconColor={theme.white}
        onPress={onPressAddNew}
        icon={Svgs.ic_add}
      />
    </View>
  );
};

export default NoteScreen;