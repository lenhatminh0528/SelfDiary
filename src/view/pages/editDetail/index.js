import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svgs from '../../../assets/images/svg';
import {EnumRouteName} from '../../../constants/routeName';
import HeaderContainer from '../../components/headerContainer';

const EditDetail = props => {
  const {navigation} = props;
  const onPress = () => {
    navigation.navigate(EnumRouteName.NoteScreen);
  };
  return (
    <View>
      <HeaderContainer title={'Edit detail'} />
      <TouchableOpacity onPress={() => onPress()}>
        <Text>Edit Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditDetail;
