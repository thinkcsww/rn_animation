import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Animated, TouchableWithoutFeedback, PanResponder } from 'react-native';

export default class DecayFunction extends Component {
  state = {
    animation: new Animated.ValueXY(0)
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Responder initialize 
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.animation.extractOffset();
      },
      // 드래그 하는 대로 움직여 주는 함수
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      // 드래그 끝난 후에 관성 적용
      onPanResponderRelease: (e, {vx, vy}) => {
        Animated.decay(this.state.animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997
        }).start();
      }
    })
  }

  render() {
    const animatedStyle = {
      transform: this.state.animation.getTranslateTransform()
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
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}
          { ...this._panResponder.panHandlers}>
        </Animated.View>
      </View>
    )

    
  }
}