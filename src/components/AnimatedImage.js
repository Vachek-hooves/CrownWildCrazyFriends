import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Platform } from 'react-native';

export default function AnimatedImage({
  source,
  size = 265,
  scaleFrom = 1,
  duration = 800,
}) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.07,
          duration,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: scaleFrom,
          duration,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [duration, scale, scaleFrom]);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {Platform.OS === 'ios' ? (
        <Animated.Image
          source={source}
          resizeMode="cover"
          style={{
            transform: [{ scale }],
          }}
        />
      ) : (
        <Animated.Image
          source={require('../assets/images/icon.png')}
          resizeMode="cover"
          style={{
            transform: [{ scale }],
            width: 265,
            height: 265,
            borderRadius: 55,
            elevation: 20,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
