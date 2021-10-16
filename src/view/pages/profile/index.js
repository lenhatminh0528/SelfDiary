import React from 'react';
import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import themedStyles from './styles';
import * as Animatable from 'react-native-animatable';
import {useTheme} from 'react-native-themed-styles';
import globalStyle from '../../../constants/globalStyles';
import PNG from '../../../assets/images/png';
import Svgs from '../../../assets/images/svg';
import {SvgXml} from 'react-native-svg';
import useMergeState from '../../../utils/useMergeState';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import _ from 'lodash';

const MIN_HEIGHT = 56;
const MAX_HEIGHT = 250;
const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = 56;

const DATA = {
  basicInfor: {
    name: 'Le Nhat Minh',
    age: 22,
    dob: '28-05-1999',
    hobby: ['Guitar', 'ReadBook', 'BasketBall', 'Codeing'],
  },
  experience: [
    {
      from: '2017',
      to: '2021',
      title: 'Studying at university of Science',
    },
    {
      from: '2021',
      to: 'now',
      title: 'Fresher at Impact Technical Resource Company',
    },
  ],
  socialMedia: [
    {
      title: 'Facebook',
      info: 'https://www.facebook.com/rookiemain/',
    },
    {
      title: 'Instagram',
      info: 'https://www.instagram.com/sad_daylight/',
    },
  ],
};

const ProfileScreen = props => {
  const [styles, theme] = useTheme(themedStyles);
  const [glbStyle] = useTheme(globalStyle);

  const [state, setState] = useMergeState({
    // scrollComponentZIndex: 0,
    stickHeaderHeight: 56,
  });

  // const onChangeHeaderVisibility = isShowHeader => {
  //   console.log('is show header: ', isShowHeader);
  //   if (isShowHeader) {
  //     setState({scrollComponentZIndex: 1});
  //   } else {
  //     setState({scrollComponentZIndex: 0});
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        showsVerticalScrollIndicator={false}
        fadeOutForeground
        renderHeader={() => (
          <Image source={PNG.doraemon} style={styles.image} />
        )}
        renderFixedForeground={() => (
          <Animatable.View
            style={styles.navTitleView}
            // ref={navTitleView => {
            //   this.navTitleView = navTitleView;
            // }}
          >
            <Text style={styles.navTitle}>
              {'tvShowContent.title'}, ({'tvShowContent.year'})
            </Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          // onHide={() => this.navTitleView.fadeInUp(200)}
          // onDisplay={() => this.navTitleView.fadeOut(100)}
        >
          <Text style={styles.title}>
            <Text style={styles.name}>{'tvShowContent.title'}</Text>, (
            {'tvShowContent.title'})
          </Text>
        </TriggeringView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.sectionContent}>{'tvShowContent.title'}</Text>
        </View>
      </HeaderImageScrollView> */}
      <ParallaxScrollView
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        stickyHeaderHeight={state.stickHeaderHeight}
        backgroundScrollSpeed={5}
        backgroundColor={'transparent'}
        // fadeOutForeground={0.5}
        // fadeOutBackground={0}
        // fadeOutForeground={false}

        // onChangeHeaderVisibility={onChangeHeaderVisibility}
        // renderScrollComponent={() => (
        //   <Animated.ScrollView style={{zIndex: state.scrollComponentZIndex}} />
        // )}
        renderBackground={() => (
          <View>
            <Image source={PNG.doraemon} style={styles.image} />
          </View>
        )}
        renderForeground={() => (
          <TouchableOpacity
            onPress={() => {
              console.log('onPress');
            }}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Le Minh</Text>
          </TouchableOpacity>
        )}
        scrollEvent={event => {
          console.log('event: ', event.nativeEvent.contentOffset.y);
        }}
        renderStickyHeader={() => (
          <TouchableOpacity
            onPress={() => {
              console.log('on Press');
            }}
            style={{
              width: '100%',
              height: 56,
              backgroundColor: '#7f0000',
              paddingLeft: 20,
              // alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 23, fontWeight: 'bold'}}>
              Profile Screen
            </Text>
          </TouchableOpacity>
        )}
        renderFixedHeader={() => (
          <View style={{width: '100%', height: 56, backgroundColor: 'blue'}}>
            <Text>Le Minh hahah</Text>
          </View>
        )}>
        <View
          style={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: 'white',
            marginTop: -20,
            paddingTop: 30,
          }}>
          <View style={{paddingHorizontal: 15}}>
            {/* Header infor */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                paddingBottom: 20,
              }}>
              <Image
                source={PNG.clianMurphy}
                style={{
                  borderRadius: 50,
                  height: 80,
                  width: 80,
                  marginRight: 20,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  Le Nhat Minh
                </Text>
                <Text>lenhatminh0528@gmail.com</Text>
                <Text>+0935902859</Text>
              </View>
            </View>
            {/* Basic infor */}
            <View style={{marginVertical: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Basic Info</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <SvgXml
                  style={{marginRight: 15}}
                  xml={Svgs.ic_user}
                  // width={25}
                  // height={25}
                  fill={'gray'}
                />
                <Text>Le Nhat Minh</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <SvgXml
                  style={{marginRight: 15}}
                  xml={Svgs.ic_mail}
                  // width={25}
                  // height={25}
                  fill={'gray'}
                />
                <Text>lenhatminh0528@gmail.com</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <SvgXml
                  style={{marginRight: 15}}
                  xml={Svgs.ic_phone}
                  // width={25}
                  // height={25}
                  fill={'gray'}
                />
                <Text>+0935902859</Text>
              </View>
            </View>
            {/* Experience */}
            {/* Project */}
          </View>
        </View>
      </ParallaxScrollView>
    </View>
  );
};

export default ProfileScreen;
