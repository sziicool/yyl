import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import { Video } from 'react-native-video';


export default class VideoScreen extends Component {

  render() {

    return <Video source={{ uri: "../x/test01.xmind" }}   // Can be a URL or a local file.
      ref={(ref) => {
        this.player = ref
      }}                                      // Store reference
      // onBuffer={this.onBuffer}                // Callback when remote video is buffering
      // onEnd={this.onEnd}                      // Callback when playback finishes
      // onError={this.videoError}               // Callback when video cannot be loaded
      // onFullscreenPlayerWillPresent={this.fullScreenPlayerWillPresent} // Callback before fullscreen starts
      // onFullscreenPlayerDidPresent={this.fullScreenPlayerDidPresent}   // Callback after fullscreen started
      // onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss} // Callback before fullscreen stops
      // onFullscreenPlayerDidDismiss={this.fullScreenPlayerDidDismiss}  // Callback after fullscreen stopped
      style={styles.backgroundVideo} />
  }

  componentDidMount() {
  }

}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});