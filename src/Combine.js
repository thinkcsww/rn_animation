import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Animated, TouchableWithoutFeedback, PanResponder } from 'react-native';

export default class DecayFunction extends Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1),
  };

  /**
   * Parallel function
   */

  // handlePress = () => {
  //   Animated.parallel([
  //     Animated.timing(this.state.colorAnimation, {
  //       toValue: 1,
  //       duration: 500
  //     }),
  //     Animated.timing(this.state.scaleAnimation, {
  //       toValue: 2,
  //       duration: 500,
  //     })
  //   ]).start(() => {
  //     Animated.parallel([
  //       Animated.timing(this.state.colorAnimation, {
  //         toValue: 0,
  //         duration: 500
  //       }),
  //       Animated.timing(this.state.scaleAnimation, {
  //         toValue: 1,
  //         duration: 500,
  //       })
  //     ]).start();
  //   });
  // }

  /**
   * sequence function
   */
  // handlePress = () => {
  //   Animated.sequence([
  //     Animated.timing(this.state.scaleAnimation, {
  //       toValue: 2,
  //       duration: 300
  //     }),
  //     Animated.timing(this.state.colorAnimation, {
  //       toValue: 1,
  //       duration: 500
  //     })
  //   ]).start();
  // }

   /**
   * stagger function 첫번째 꺼 실행후 200초 후? 
   */

  // handlePress = () => {
  //   Animated.stagger(200, [
  //     Animated.timing(this.state.colorAnimation, {
  //       toValue: 1,
  //       duration: 500
  //     }),
  //     Animated.timing(this.state.scaleAnimation, {
  //       toValue: 2,
  //       duration: 300
  //     })
  //   ]).start();
  // }

  /**
   * Delay function 첫번째 꺼 실행후 200초 후? 
   */

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300
      }),
      Animated.delay(1500),
      Animated.parallel([
        Animated.timing(this.state.colorAnimation, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.scaleAnimation, {
          toValue: 1,
          duration: 300,
        })
      ])
    ]).start();
  }

  componentWillMount() {
  }

  render() {
    const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"]
    });

    const boxStyle = {
      backgroundColor: backgroundColorInterpolate,
      transform: [
        { scale: this.state.scaleAnimation }
      ]
    };

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
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, boxStyle]}>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )

    
  }
}