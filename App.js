import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import AnimatedFunctions from './src/Functions';
import DecayFunction from './src/DecayFunction';
import Combine from './src/Combine';
import Interpolation from './src/Interpolation';
import HowItWorks from './src/HowItWorks';

export default function App() {
  const [colorAnimation, setAnimation] = useState(new Animated.Value(0));
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const boxInterpolation = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 99, 71)", "rgb(71, 99, 255)"]
  });

  const colorInterpolation = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(71, 99, 255)", "rgb(255, 99, 71)"]
  });

  const rotateInterpolation = rotateAnimation.interpolate({ 
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  })

  const boxAnimatedStyle = {
    backgroundColor: boxInterpolation
  };

  const textAnimatedStyle = {
    color: colorInterpolation
  };

  const rotateAnimatedStyle = {
    transform: [
      {
        rotate: rotateInterpolation
      }
    ]
  }

  startColorAnimation = () => {
    Animated.timing(colorAnimation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 1500,
      }).start();
    });
  };

  startRotateAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 360,
      duration: 1500
    }).start(() => [
      Animated.timing(rotateAnimation, {
        toValue: 0,
        duration: 1500
      }).start()
    ]);
  };

  return (
    // <AnimatedFunctions/>
    // <DecayFunction/>
    // <Interpolation/>
    // <Combine/>
    <HowItWorks/>
    // <View style={styles.container}>
    //   {/* <TouchableWithoutFeedback onPress={startColorAnimation}>
    //     <Animated.View style={[styles.box, boxAnimatedStyle]}>
    //       <Animated.Text style={textAnimatedStyle}>Hello</Animated.Text>
    //     </Animated.View>
    //   </TouchableWithoutFeedback> */}
    //   {/* <TouchableWithoutFeedback onPress={startRotateAnimation}>
    //     <Animated.View style={[styles.box, rotateAnimatedStyle]}>
    //       <Animated.Text style={textAnimatedStyle}>Hello</Animated.Text>
    //     </Animated.View>
    //   </TouchableWithoutFeedback> */}
    //   {/*  */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    left: 0,
    top: 0,
    width: 150,
    height: 150,
    backgroundColor: "tomato"
  }
});
