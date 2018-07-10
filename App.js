import SplashScreen from 'react-native-splash-screen'
import React, { Component } from 'react';
import { View, Easing, Animated } from 'react-native';

import MainScreen from './src/components/MainScreen';
import BrushteethMethod from './src/components/BrushteethMethod';
import VideoScreen from './src/components/VideoScreen';

import { StackNavigator } from 'react-navigation';

const RouteConfigs = {
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  BrushMethod: {
    screen: BrushteethMethod,
    navigationOptions: ({ navigation }) => ({
      // header:null
      title: '刷牙方法教程',
      headerStyle: {
        // backgroundColor:'rgba(31,35,32,0.4)'
      },
      headerMode: 'screen'
    }),
  },
  VideoScreen: {
    screen: VideoScreen,
    navigationOptions: ({ navigation }) => ({
      // header:null
      title: '刷牙方法教程',
      headerStyle: {
        // backgroundColor:'rgba(31,35,32,0.4)'
      },
      headerMode: 'screen'
    }),
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Main',
  initialRouteParams: { initPara: '初始页面参数' },
  navigationOptions: {
    title: '标题',
    headerTitleStyle: { fontSize: 18, color: '#666666' },
    headerStyle: { height: 48, backgroundColor: '#fff' },
  },
  paths: 'page/main',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: { backgroundColor: "#ffffff" },
  transitionConfig: (() => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateY }] };
    },
  })),
  onTransitionStart: (() => {
    console.log('页面跳转动画开始');
  }),
  onTransitionEnd: (() => {
    console.log('页面跳转动画结束');
  }),
};


const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default class App extends Component {
  render() {
    return <Navigator />
  }
  componentDidMount() {
    SplashScreen.hide();
    // Navigator.navigation.navigate('Main', {param: 'i am the param'}); 
  }
}