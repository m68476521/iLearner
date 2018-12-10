/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AdsManagerStatus, Animated, Easing} from 'react-native';

class FadeInView extends React.Component {
  constructor () {
  	super()
    this.animatedValue = new Animated.Value(0)
  }

  state = {
    fadeAnim: new Animated.Value(0), //Inital value for opacity 0
  }

  

  componentDidMount() {
    this.animatedValue.setValue(0)
    Animated.timing(  //Animated over time
      this.animatedValue, { // the animated view to drive
        toValue: 1, // animated to opacicty 1 opaque
        easing: Easing.back(),
        duration: 1500, //make it take a whilw
      }
    ).start(); //start animation
  }

  render() {
    let {fadeAnim} = this.state;
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 260]
    })

    return (
      <Animated.View
        style={[styles.block,
         {marginLeft} ]}
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
  block: {
  	width: 160,
    height: 50,
    backgroundColor: 'red'
  },
});
