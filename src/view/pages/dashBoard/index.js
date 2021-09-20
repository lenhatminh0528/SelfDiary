import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import HeaderContainer from '../../components/headerContainer';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import ButtonCT from '../../components/buttonCT';
import DashBoardCell from '../dashBoard/dashBoardCell';

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
const DashBoard = () => {
  const pressLeft = () => {
    console.log('press left');
  };
  const renderItem = ({item}) => <DashBoardCell item={item} />;
  const onPressAddNew = () => {
    console.log('add new: ');
  };
  return (
    <View style={{flex: 1}}>
      <HeaderContainer
        onPressIconLeft={pressLeft}
        iconLeft={Svgs.back}
        title={'dash board'}
        iconRightContent={
          <TouchableOpacity
            style={{
              paddingRight: 20,
              marginLeft: 10,
            }}>
            <SvgXml fill={'black'} width={20} height={20} xml={Svgs.ic_trash} />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={DATA}
        keyExtractor={item => item?.id}
        contentContainerStyle={{marginHorizontal: 10}}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <ButtonCT
        containerStyle={{
          width: 60,
          height: 60,
          borderRadius: 28,
          position: 'absolute',
          right: 20,
          bottom: 20,
          shadowColor: 'red',
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 6,
        }}
        onPress={onPressAddNew}
        icon={Svgs.ic_add}
        // title={'Minh dep trai'}
      />
    </View>
  );
};

export default DashBoard;
