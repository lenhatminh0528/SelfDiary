import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InitView from '../pages/initView';
import SettingView from '../pages/setting';
import NoteScreen from '../pages/note';
import EditDetail from '../pages/editDetail';
import {EnumRouteName} from '../../constants/routeName';
import {getData, storeData} from '../../utils';
import {EmitterKey, EnumStorage} from '../../constants';
import SplashScreen from 'react-native-splash-screen';
import ProfileScreen from '../pages/profile';
import TabBar from '../components/tabbar';
import navigationRef from './navigationService';
import emitter from '../../utils/emitter';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

const AuthFlow = () => {
  return (
    <AuthStack.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        gestureEnabled: true,
      })}
      initialRouteName={EnumRouteName.InitView}>
      <AuthStack.Screen name={EnumRouteName.InitView} component={InitView} />
    </AuthStack.Navigator>
  );
};

const RootFlow = () => {
  return (
    <Root.Navigator
      // initialRouteName={EnumRouteName.TabNavigation}
      screenOptions={{
        headerShown: false,
      }}>
      <Root.Screen
        name={EnumRouteName.TabNavigation}
        component={TabNavigation}
      />
      <Root.Screen name={EnumRouteName.EditDetail} component={EditDetail} />
      <Root.Screen name={EnumRouteName.SettingView} component={SettingView} />
    </Root.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      backBehavior={false}
      tabBarOptions={{
        animationEnabled: false,
      }}
      screenOptions={{headerShown: false}}
      initialRouteName={EnumRouteName.Notes}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={EnumRouteName.Notes} component={NoteScreen} />
      <Tab.Screen name={EnumRouteName.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getLogin = async () => {
      const signed = await getData(EnumStorage.signedIn);
      // setSignIn(signed || false);
      setLoading(false);
      SplashScreen.hide();
    };
    getLogin();
  }, []);

  useEffect(() => {
    const listener = emitter.addListener(
      EmitterKey.CHANGE_STATUS,
      ({isAuthorized}) => {
        setSignIn(true);
        storeData(isAuthorized, EnumStorage.signedIn);
      },
    );
    return () => {
      listener.remove();
    };
  }, []);

  if (isLoading) {
    return <View />;
  }
  return (
    <NavigationContainer ref={navigationRef}>
      {!isSignIn ? <AuthFlow /> : <RootFlow />}
    </NavigationContainer>
  );
};

export default AppNavigation;
