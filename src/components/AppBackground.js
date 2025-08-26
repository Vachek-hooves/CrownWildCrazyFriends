import { ImageBackground } from 'react-native';

const AppBackground = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={{ flex: 1 }}
      // colors={['#FFD93B', '#FFA500', '#FF6A00']}
      // start={{ x: 0.5, y: 0 }}
      // end={{ x: 0.5, y: 1 }}
    >
      {children}
    </ImageBackground>
  );
};

export default AppBackground;
