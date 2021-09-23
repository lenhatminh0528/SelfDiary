import {Platform} from 'react-native';

export const EnumStorage = {
  data: '@data',
  signedIn: '@signedIn',
};

export const EmitterKey = {
  CHANGE_STATUS: 'CHANGE_STATUS',
};

export const isIOs = Platform.isIOs;

export const initTheme = {
  mode: 'light',
};
