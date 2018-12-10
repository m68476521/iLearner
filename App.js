/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AdsManagerStatus, Animated} from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), //Inital value for opacity 0
  }

  componentDidMount() {
    Animated.timing(  //Animated over time
      this.state.fadeAnim, { // the animated view to drive
        toValue: 1, // animated to opacicty 1 opaque
        duration: 5000, //make it take a whilw
      }
    ).start(); //start animation
  }

  render() {
    let {fadeAnim} = this.state;

    return (
      <Animated.View
        style={{...this.props.style,
        opacity: fadeAnim,}}
        >
        {this.props.children}
        </Animated.View>
    );
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends React.Component {
  render() {
    return (
     <View style={{flex: 1,
      alignItems:'center',
      justifyContent: 'center'}}>
      <FadeInView style={{width:250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize:28, textAlign: 'center', margin: 10}}>Fading in!</Text>
      </FadeInView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
