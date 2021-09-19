import {useEffect, useState} from 'react';
import {registerThemes} from 'react-native-themed-styles';
import {initTheme} from '.';
import {DARK_THEME, LIGHT_THEME} from './colorTheme';
import emitter from '../utils/emitter';

const light = LIGHT_THEME;
const dark = DARK_THEME;

export const styleSheetFactory = registerThemes({light, dark}, () => {
  const [colorScheme, setColorScheme] = useState(initTheme.mode);

  useEffect(() => {
    const listener = emitter.addListener('ChangeAppTheme', theme => {
      setColorScheme(theme);
      initTheme.mode = theme;
    });
    return () => {
      listener.remove();
    };
  }, []);
  return ['light', 'dark'].includes(colorScheme) ? colorScheme : 'light';
});
