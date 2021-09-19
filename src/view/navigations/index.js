import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import InitView from '../pages/initView';
import SettingView from '../pages/setting';
import DashBoard from '../pages/dashBoard';
import {EnumRouteName} from '../../constants/routeName';
const AuthStack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
        })}
        initialRouteName={EnumRouteName.initView}>
        <AuthStack.Screen name={EnumRouteName.initView} component={InitView} />
        <AuthStack.Screen
          name={EnumRouteName.settingView}
          component={SettingView}
        />
        <AuthStack.Screen
          name={EnumRouteName.dashBoard}
          component={DashBoard}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
