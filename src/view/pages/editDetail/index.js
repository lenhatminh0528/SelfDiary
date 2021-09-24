import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import Svgs from '../../../assets/images/svg';
import {EnumRouteName} from '../../../constants/routeName';
import HeaderContainer from '../../components/headerContainer';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../constants/globalStyles';
import {SvgXml} from 'react-native-svg';
import useMergeState from '../../../utils/useMergeState';
import {screenWidth, screenHeight} from '../../../utils';
import SelectDate from './selectDate';
import moment from 'moment';

const DATA = {
  title: 'Title text 1',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
  isNotify: false,
  timeNoti: 'DAILY',
  dateNotify: [''],
  createdDate: moment().toISOString(),
};

const EditDetail = props => {
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);
  const {navigation, route} = props;
  const [state, setState] = useMergeState({
    isSwitchOn: false,
    data: '',
  });

  useEffect(() => {
    const t = moment();
    console.log('moment: ', t.format('MM-YY'));

    console.log('dates: ', DATA);
  }, []);

  const {data} = route.params || {
    title: '',
    content: '',
    isNotify: false,
    timeNoti: 'DAILY',
  };

  useEffect(() => {
    const dates = [];
    [...Array(9).keys()].forEach(obj => {
      console.log('alo:', obj);
      dates.push(moment().add(obj, 'month').toISOString());
    });
    DATA.dateNotify = dates;
    setState({data: DATA});
  }, [data, setState]);

  const pressLeft = () => {
    navigation.goBack();
  };

  const toggleSwitch = () => {
    setState({isSwitchOn: !state.isSwitchOn});
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
      <ScrollView
        // keyboardDismissMode="interactive"
        style={[glbStyle.flex1, {padding: 10}]}>
        {/*DATE TIME */}
        <SelectDate
          dateSelected={DATA.dateNotify}
          isSwitchEnabled={state.isSwitchOn}
          toggleSwitch={toggleSwitch}
        />
        <View
          style={{
            elevation: 5,
            flex: 1,
            marginTop: 10,
            borderRadius: 5,
            backgroundColor: 'white',
            padding: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Note title: </Text>
          <View
            style={{
              width: '90%',
              marginVertical: 10,
              height: 1,
              backgroundColor: 'green',
            }}
          />
          <View
            style={{
              flex: 1,
              height: screenHeight / 2,
            }}>
            <TextInput
              multiline={true}
              textAlignVertical="top"
              numberOfLines={15}
              disableFullscreenUI={false}
              style={[
                {flex: 1, overflow: 'scroll', flexWrap: 'wrap'},
                {textAlign: 'left', alignSelf: 'stretch'},
                glbStyle.font16,
              ]}
              placeholder={'Write something here...'}
            />
            <Text style={{textAlign: 'right'}}>
              {moment().format('DD/MM/YY HH-mm')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditDetail;
