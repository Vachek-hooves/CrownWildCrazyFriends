import { Dimensions, ImageBackground, ScrollView, View } from 'react-native';
import AnimatedImage from './AnimatedImage';
import AppBackground from './AppBackground';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

const WildTimeMainLoader = () => {
  return (
    <ImageBackground
      source={require('../assets/bg/bg.png')}
      style={{ flex: 1 }}
    />
  );
};

export default WildTimeMainLoader;
