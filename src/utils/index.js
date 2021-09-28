import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions, Platform} from 'react-native';
import NoficationService from '../view/components/pushNotification/notificationService';

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;

export const isAndroid = Platform.OS === 'android';

export const storeData = async (value, KEY) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(KEY, jsonValue);
  } catch (error) {
    console.log('AsyncStorage save error: ', error);
  }
};

export const pushNoti = () => {
  NoficationService.pushLocalNotification(
    'hello',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'title 1',
  );
};

export const getData = async KEY => {
  try {
    const jsonValue = await AsyncStorage.getItem(KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('AsyncStorage get error: ', error);
  }
};

export const clearMultipleData = async keys => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.log('AsyncStorage clear multidata error: ', error);
  }
};

export const clearData = async KEY => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {
    console.log('AsyncStorage clear data error: ', error);
  }
};
