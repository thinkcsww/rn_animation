import React, { Component } from 'react';
import { Animated, Button, StyleSheet, Text, View, AppRegistry } from'react-native';

const AnimatedButton = Animated.createAnimatedComponent(
  Button
)

export default class HowItWorks extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  setNativeProps = (props) => {
    this.button.setNativeProps(props);
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 300
      }).start();
    });
  }

  componentWillMount() {

  }

  render() {
    const animatedColor = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99, 71, 255)"]
    });

    return (
      <View style={styles.container}>
        <AnimatedButton ref={(ref) => { this.button = ref}} color={animatedColor} title="Press me" onPress={this.startAnimation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});