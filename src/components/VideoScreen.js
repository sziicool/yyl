import React, {
  Component
} from 'react';

import I18n from '../lang/i18n';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';

import Video from 'react-native-video';

export default class VideoPlayer extends Component {

  arr = [require('../x/kn/01.mp4'), require('../x/kn/02.mp4'), require('../x/kn/03.mp4'), require('../x/kn/04.mp4')]

  state = {
    volume: 1.0,
    resizeMode: 'contain',
    position: 0,
    source: this.arr[0]
  };

  componentDidMount() {
  }

  video = Video;

  onEnd = () => {
    if (this.state.position < this.arr.length - 1) {
      this.setState({
        position: this.state.position + 1,
        source: this.arr[this.state.position + 1]
      })
    }
  }

  render() {
    var { height, width } = Dimensions.get('window');
    return (
      <ImageBackground source={require('../imgs/bg.png')} style={styles.container}>
        <Video
          ref={(ref) => { this.video = ref }}
          source={this.state.source}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: 720 / 1280 * width
          }}
          resizeMode={this.state.resizeMode}
          repeat={false}
          onEnd={this.onEnd}
        />
        <View style={{ width: '100%', height: 50, justifyContent: 'space-around', alignItems: 'center' }}>
          <Text>{I18n.t('mp40'+(this.state.position+1))}</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {
            this.setState({
              position: 0,
              source: this.arr[0]
            })
          }}>
            <Image source={this.state.position == 0 ? require('../imgs/u8.png') : require('../imgs/u10.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({
              position: 1,
              source: this.arr[1]
            })
          }}>
            <Image ref='02' source={this.state.position == 1 ? require('../imgs/u8.png') : require('../imgs/u10.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({
              position: 2,
              source: this.arr[2]
            })
          }}>
            <Image ref='03' source={this.state.position == 2 ? require('../imgs/u8.png') : require('../imgs/u10.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({
              position: 3,
              source: this.arr[3]
            })
          }}>
            <Image ref='04' source={this.state.position == 3 ? require('../imgs/u8.png') : require('../imgs/u10.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});