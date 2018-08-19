import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import I18n from '../lang/i18n';

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
            <Text>{ I18n.t('setting') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.topmenuimg} source={require('../imgs/communication.png')} />
            <Text>{ I18n.t('commonchild') }</Text>
            <Text>{ I18n.t('community') }</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainGrid}>
          <TouchableOpacity style={ styles.gridtext } onPress={ ()=>{ this.press('BrushMethod') } }>
            <Image style={styles.mainGridimg} source={require('../imgs/brushteeth.png')} />
            <Text>{ I18n.t('brushteeth') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.mainGridimg} source={require('../imgs/teethgrow.png')} />
            <Text>{ I18n.t('teethgrow') }</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainGrid}>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.mainGridimg} source={require('../imgs/teethsick.png')} />
            <Text>{ I18n.t('teethsick') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.gridtext }>
            <Image style={styles.mainGridimg} source={require('../imgs/brushrecord.png')} />
            <Text>{ I18n.t('brushrecord') }</Text>
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
