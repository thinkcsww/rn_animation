import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Animated, TouchableWithoutFeedback, PanResponder } from 'react-native';


const AnimatedFunctions = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  //
  /** Spring fucntion*/ 
  //

  // handlePress = () => {
  //   Animated.spring(animation, {
  //     toValue: 2,
  //     // friction : 얼마나 더 탱탱한지
  //     friction: 1,
  //     // tension: 뭐지? 똑같은디? 
  //     tenstion: 160
  //   }).start(() => {
  //     Animated.timing(animation, {
  //       toValue: 1,
  //       duration: 100
  //     }).start();
  //   });
  // }

    // const animatedStyle = {
    //   transform: [
    //     { scale: animation }
    //   ]
    // };

    /**
     *  Loop function
     *  */ 

    // handlePress = () => {
    //   Animated.loop(Animated.timing(animation, {
    //     toValue: 1,
    //     duration: 500
    //   })).start();
    // }
     
    // const interpolated = animation.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ["0deg", "360deg"]
    // });
     
    // const animatedStyle = {
    //   transform: [
    //     { 
    //       rotate: interpolated
    //     }
    //   ]
    // }

    /**
     * event function - scrollview에서 주로 쓰인다.
     *  */ 

    handlePress = () => {
      Animated.loop(Animated.timing(animation, {
        toValue: 1,
        duration: 500
      })).start();
    }
     
    const interpolated = animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ["rgb(71, 99, 255)", "rgb(255, 99, 71)"]
    });
     
    const animatedStyle = {
      backgroundColor: interpolated
    }

        
     


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.box, animatedStyle]}
          { ...panResponer.panHandlers}>
          
        </Animated.View>
      </TouchableWithoutFeedback>

      {/* <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: animation
              }
            }
          }
        ])}>
        <Animated.View style={[styles.content, animatedStyle]}/>
      </ScrollView> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default AnimatedFunctions;