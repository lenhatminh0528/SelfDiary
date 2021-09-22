import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value, KEY) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(KEY, jsonValue);
  } catch (error) {
    console.log('AsyncStorage save error: ', error);
  }
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
