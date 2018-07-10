import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
export default class BrushteethMethod extends Component {

  render() {
    return <ImageBackground style={styles.bg} source={require('../imgs/bg.png')} >
      <View style={styles.header}>
        <Image style={styles.backarrow} source={require('../imgs/backarrow.png')}></Image>
        {/* <View style={ styles.header }> */}
        <Text style={styles.header}>刷牙方法教程</Text>
        {/* </View> */}
      </View>
      <TouchableOpacity onPress={() => {

        const navigateAction = NavigationActions.navigate({
          routeName: 'VideoScreen',

          params: {},

          action: NavigationActions.navigate({ routeName: 'VideoScreen' }),
        });

        this.props.navigation.dispatch(navigateAction);
      }}>
        <Image source={require('../imgs/teeth.png')}></Image>
      </TouchableOpacity>
    </ImageBackground>
  }

}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  },
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    textAlign: 'center'
  },
  backarrow: {

  }
})
