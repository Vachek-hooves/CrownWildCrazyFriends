import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MediumButton = ({
  onPress,
  title,
  style,
  borders,
  textStyle,
  isDisabled,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );
    pulse.start();

    return () => pulse.stop();
  }, []);

  return (
    <TouchableOpacity
      style={styles.btnShadow}
      activeOpacity={0.9}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Animated.View
        style={[styles.pulse, { transform: [{ scale }] }, borders]}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 1)', 'rgba(255, 248, 206, 1)']}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 0.3, y: 0.4 }}
        style={[styles.gradientButton, style]}
      >
        <LinearGradient
          colors={['rgba(253, 218, 22, 0.73)', 'rgba(255, 248, 206, 1)']}
          locations={[0, 0.2]}
          style={{
            ...StyleSheet.absoluteFillObject,
            borderRadius: 33,
            height: '40%',
          }}
        />
        <Text style={[styles.gradientButtonText, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientButton: {
    width: 159,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
    marginTop: 17,
    overflow: 'hidden',
  },
  gradientButtonText: {
    fontWeight: '900',
    fontSize: 15,
    color: '#B92D05',
  },

  pulse: {
    position: 'absolute',
    left: -2,
    top: 13,
    width: 162,
    height: 85,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.57)',
    opacity: 0.4,
    zIndex: -1,
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
});

export default MediumButton;
