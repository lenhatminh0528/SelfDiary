import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Svgs from '../../../assets/images/svg';
import {EnumRouteName} from '../../../constants/routeName';
import HeaderContainer from '../../components/headerContainer';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../constants/globalStyles';
import {SvgXml} from 'react-native-svg';
import useMergeState from '../../../utils/useMergeState';

const DATA = {
  title: 'Title text 1',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
  isNotify: false,
  timeNoti: 'DAILY',
};

const EditDetail = props => {
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  const {navigation, route} = props;
  const [state, setState] = useMergeState({
    data: '',
  });

  const {data} = route.params || {
    title: '',
    content: '',
    isNotify: false,
    timeNoti: 'DAILY',
  };

  useEffect(() => {
    setState({data: data});
  }, [data, setState]);

  const pressLeft = () => {
    navigation.goBack();
  };
  return (
    <View style={glbStyle.flex1}>
      <HeaderContainer
        style={{backgroundColor: '#1565c0'}}
        onPressIconLeft={pressLeft}
        iconLeft={Svgs.back}
        title={'Edit detail'}
        iconRightContent={
          <TouchableOpacity style={styles.iconRight}>
            <SvgXml fill={'white'} width={20} height={20} xml={Svgs.ic_check} />
          </TouchableOpacity>
        }
      />
      <View style={[glbStyle.flex1, {margin: 10, backgroundColor: 'white'}]}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'black',
            borderBottomWidth: 1,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Title</Text>
          <TextInput />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            multiline={true}
            borderBottomWidth={1}
            style={[
              {padding: 10, textAlign: 'left', alignSelf: 'stretch'},
              glbStyle.font16,
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default EditDetail;
