import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Animated, TouchableWithoutFeedback, PanResponder } from 'react-native';

export default class DecayFunction extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  handlePress = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 300
      }).start();
    });
  }

  render() {
    const animatedInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 300, 0]
    });

    const interpolatedInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 300],
      outputRange: [1, .5]
    });

    const translateXInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50, 80, 100 , 150 ,299, 300],
      outputRange: [0, -30, -50, 80, -100, 300, 0, -100],
    });

    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ["rgb(71, 99, 255)", "rgb(255, 99, 71)", "rgb(99, 71, 255)"]
    });

    const bgStyle = {
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 2],
        outputRange: ["rgba(255, 99, 71, 1)", "rgba(255, 99, 71, 0)"]
      })
    };

    const xInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const yInterpolate = this.state.animation.interpolate({
      inputRange: [0, .5, 1],
      outputRange: ["0deg", "0deg", "180deg"]
    })

    const animatedStyles = {
      transform: [
        {
          translateY: animatedInterpolate
        },
        {
          translateX: translateXInterpolate
        },
        {
          rotateX: xInterpolate
        },
        {
          rotateY: yInterpolate
        }
      ],
      opacity: interpolatedInterpolate,
      backgroundColor: colorInterpolate
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      box: {
        left: 0,
        top: 0,
        width: 150,
        height: 150,
        backgroundColor: "tomato"
      },
      content: {
        height: 3000,
      }
    });

    return (
      <Animated.View style={[styles.container, bgStyle]}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, animatedStyles]}>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )

    
  }
}