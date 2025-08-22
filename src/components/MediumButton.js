// import { useEffect, useRef } from 'react';
// import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const MediumButton = ({
//   onPress,
//   title,
//   style,
//   borders,
//   textStyle,
//   isDisabled,
// }) => {
//   const scale = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     const pulse = Animated.loop(
//       Animated.sequence([
//         Animated.timing(scale, {
//           toValue: 1.1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scale, {
//           toValue: 1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ]),
//     );
//     pulse.start();

//     return () => pulse.stop();
//   }, [scale]);

//   return (
//     <TouchableOpacity
//       style={styles.btnShadow}
//       activeOpacity={0.9}
//       onPress={onPress}
//       disabled={isDisabled}
//     >
//       <Animated.View
//         style={[styles.pulse, { transform: [{ scale }] }, borders]}
//       />
//       <LinearGradient
//         colors={['rgba(255, 248, 206, 1)', 'rgba(222, 210, 139, 1)']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         style={[styles.gradientButton, style]}
//       >
//         <Text style={[styles.gradientButtonText, textStyle]}>{title}</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   gradientButton: {
//     width: 159,
//     height: 78,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 1000,
//     marginTop: 17,
//     overflow: 'hidden',
//   },
//   gradientButtonText: {
//     fontWeight: '900',
//     fontSize: 15,
//     color: '#B92D05',
//   },
//   pulse: {
//     position: 'absolute',
//     left: -2,
//     top: 13,
//     width: 162,
//     height: 85,
//     borderRadius: 1000,
//     backgroundColor: 'rgba(247, 204, 28, 0.69)',
//     opacity: 0.4,
//     zIndex: -1,
//   },
//   btnShadow: {
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.3,
//     shadowRadius: 12,
//     elevation: 8,
//   },
// });

// export default MediumButton;

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function MediumButton({
  style,
  title,
  isDisabled,
  onPress,
  textStyle,
  borders,
  btnWidth = '55%',
  btnHeight = 78,
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (!isPressed) {
      runJitteryAnimation();
    }
  }, [isPressed]);

  const runJitteryAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(1900),
        Animated.timing(scale, {
          toValue: 0.9,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1.15,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: -5,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 5,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: -3,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 2,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 0,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const rotateDeg = rotate.interpolate({
    inputRange: [-360, 360],
    outputRange: ['-360deg', '360deg'],
  });

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.btnShadow, style, { width: btnWidth }]}
      activeOpacity={0.9}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Animated.View
        style={[
          {
            transform: [{ scale }, { rotate: rotateDeg }],
          },
          style,
        ]}
      >
        <LinearGradient
          colors={['rgba(255, 248, 206, 1)', 'rgba(222, 205, 109, 1)']}
          style={[styles.gradientButton, style]}
        >
          <Text style={[styles.gradientButtonText, textStyle]}>{title}</Text>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientButton: {
    height: 78,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    marginTop: 17,
  },
  gradientButtonText: {
    fontWeight: '900',
    fontSize: 15,
    color: '#B92D05',
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
});
