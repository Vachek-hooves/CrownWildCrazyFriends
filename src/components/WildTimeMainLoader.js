import { Dimensions, ScrollView, View } from 'react-native';
import AnimatedImage from './AnimatedImage';
import AppBackground from './AppBackground';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

const WildTimeMainLoader = () => {
  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            marginTop: height * 0.34,
            marginBottom: 100,
          }}
        >
          <AnimatedImage source={require('../assets/images/loader.png')} />
        </View>
      </ScrollView>
    </AppBackground>
  );
};

export default WildTimeMainLoader;
