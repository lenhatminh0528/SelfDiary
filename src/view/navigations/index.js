import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import InitView from '../pages/initView';
import SettingView from '../pages/setting';
import {EnumRouteName} from '../../constants/routeName';
const AuthStack = createStackNavigator();

// const firstScreen = () => {
//   return (
//     <View>
//       <Text>screen 1</Text>
//     </View>
//   );
// };

// const secondScreen = () => {
//   return (
//     <View>
//       <Text>screen 2</Text>
//     </View>
//   );
// };

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        headerMode="none"
        initialRouteName={EnumRouteName.initView}>
        <AuthStack.Screen name={EnumRouteName.initView} component={InitView} />
        <AuthStack.Screen
          name={EnumRouteName.settingView}
          component={SettingView}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
