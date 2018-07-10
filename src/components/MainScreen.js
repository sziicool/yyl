import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { NavigationActions } from 'react-navigation';
export default class MainScreen extends Component {


  state = {}

  componentWillMount() {
    var { height, width } = Dimensions.get('window');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.topmenuimg} source={require('../imgs/setting.png')} />
            <Text>设置</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.topmenuimg} source={require('../imgs/communication.png')} />
            <Text>常见儿童</Text>
            <Text>问题交流</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainGrid}>
          <TouchableOpacity style={ styles.gridtext } onPress={ ()=>{ this.press('BrushMethod') } }>
            <Image style={styles.mainGridimg} source={require('../imgs/brushteeth.png')} />
            <Text>刷牙方法教程</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.mainGridimg} source={require('../imgs/teethgrow.png')} />
            <Text>牙齿生长</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainGrid}>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.mainGridimg} source={require('../imgs/teethsick.png')} />
            <Text>常见儿童牙齿问题</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.mainGridimg} source={require('../imgs/brushrecord.png')} />
            <Text>刷牙记录</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  press(screenTitle){
    const navigateAction = NavigationActions.navigate({
      routeName: screenTitle,
    
      params: {},
    
      action: NavigationActions.navigate({ routeName: screenTitle }),
    });
    
    this.props.navigation.dispatch(navigateAction);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  topbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  topmenuimg: {
    width: 65,
    height: 65
  },
  mainGrid: {
    marginTop: 20,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  mainGridimg: {
    width: 150,
    height: 150
  },
  gridtext: {
    // textAlign: 'center'
    alignItems: 'center'
  }
});
