import React from 'react';
import {View} from 'react-native';
import Svgs from '../../../assets/images/svg';
import TabCell from './tabCell';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import {EnumRouteName} from '../../../constants/routeName';

const TabBar = ({state, descriptors, navigation}) => {
  const [styles, theme] = useTheme(themedStyles);
  const contanerColor = state.index === 0 ? '#64b5f6' : '#ef9a9a';
  return (
    <View style={[styles.container, {backgroundColor: contanerColor}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const iconColor =
          state.index === 0 && !isFocused
            ? '#002171'
            : state.index === 1 && !isFocused
            ? '#7f0000'
            : 'white';
        const textColor =
          state.index === 0 && !isFocused
            ? '#002171'
            : state.index === 1 && !isFocused
            ? '#7f0000'
            : 'white';
        const cellColor =
          state.index === 0 && isFocused
            ? '#1565c0'
            : state.index === 1 && isFocused
            ? '#7f0000'
            : 'white';
        const borderColor =
          state.index === 0 && isFocused
            ? '#002171'
            : state.index === 1 && isFocused
            ? '#7f0000'
            : 'black';
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              // , merge: true
            });
          }
        };
        const icon =
          route.name === EnumRouteName.NoteScreen
            ? Svgs.ic_note1
            : Svgs.ic_user;
        const displayLabel = label;
        return (
          <TabCell
            onPress={onPress}
            containerStyle={{
              backgroundColor: cellColor,
              borderColor: borderColor,
            }}
            iconColor={iconColor}
            key={displayLabel}
            title={label}
            icon={icon}
            titleColor={textColor}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
