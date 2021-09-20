import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const DashBoardCell = props => {
  const {item} = props;

  useEffect(() => {
    console.log('item cell: ', item);
  }, [item]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 75,
          borderRadius: 10,
          borderWidth: 1,
          marginVertical: 5,
          backgroundColor: 'pink',
          padding: 10,
        }}>
        <Text style={{fontSize: 20}}>{item.title}</Text>
        <Text style={{fontSize: 20}}>{item.context}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashBoardCell;
