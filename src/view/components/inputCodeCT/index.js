import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import globalStyle from '../../../constants/globalStyles';
import {
  Cursor,
  useClearByFocusCell,
  CodeField,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';

const {Value, Text: AnimatedText} = Animated;
const animationColor = [...new Array(4)].map(() => new Value(0));
const animationScale = [...new Array(4)].map(() => new Value(1));

const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const InputCodeCT = passingProps => {
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  const {cellCount, onChangeText, customStyles} = passingProps;
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('animationColor: ', animationColor);
  }, []);

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({value, cellCount: cellCount});

  const onChange = text => {
    setValue(text);
    onChangeText(text);
  };

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['#3557b7', '#f7fafe'],
            //0 = xanh, 1 = trang.
          })
        : animationColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['#fff', '#f7fafe'],
            // 0 = trang , 1 = trang xam.
          }),
      // borderRadius: animationScale[index].interpolate({
      //   inputRange: [0, 1],
      //   outputRange: [50, 8],
      // }),
      // transform: [
      //   {
      //     scale: animationScale[index].interpolate({
      //       inputRange: [0, 1],
      //       outputRange: [0.3, 1],
      //     }),
      //   },
      // ],
    };
    setTimeout(() => {
      console.log(
        'timeout active: index: ',
        index,
        ', isFocused: ',
        isFocused,
        ', symbol: ',
        symbol,
      );
      animateCell({hasValue, index, isFocused});
    }, 0);
    return (
      <AnimatedText
        key={index}
        onLayout={getCellOnLayoutHandler(index)}
        style={[
          {
            marginHorizontal: 2,
            fontSize: 30,
            height: 55,
            elevation: 3,
            paddingTop: 5,
            width: 55,
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: 4,
            borderColor: 'black',
            color: '#fff',
          },
          animatedCellStyle,
        ]}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <View style={[styles.container, customStyles]}>
      <CodeField
        {...props}
        cellCount={cellCount}
        ref={ref}
        value={value}
        onChangeText={onChange}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
        // renderCell={({index, symbol, isFocused}) => (
        //   <View
        //     key={index}
        //     onLayout={getCellOnLayoutHandler(index)}
        //     style={[
        //       {
        //         lineHeight: 60 - 10,
        //         flex: 1,
        //         marginHorizontal: 5,
        //         height: 60,
        //         justifyContent: 'center',
        //         borderRadius: 10,
        //         paddingHorizontal: 15,
        //         alignItems: 'center',
        //         borderWidth: 1,
        //         borderColor: 'black',
        //       },
        //       symbol && {
        //         borderColor: 'red',
        //       },
        //       !symbol && {
        //         paddingHorizontal: 15,
        //       },
        //       isFocused && {
        //         borderColor: 'yellow',
        //       },
        //     ]}>
        //     <Text
        //       selectionColor="red"
        //       style={{fontSize: 30, fontWeight: 'bold'}}>
        //       {symbol ||
        //         (isFocused ? <Cursor cursorSymbol="|" delay={500} /> : '')}
        //     </Text>
        //   </View>
        // )}
      />
    </View>
  );
};

export default InputCodeCT;
