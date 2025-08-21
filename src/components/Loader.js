import { Dimensions, ScrollView, View } from 'react-native';
import AnimatedImage from '../components/AnimatedImage';
import AppBackground from './AppBackground';

const { height } = Dimensions.get('window');

const Loader = () => {
  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            marginTop: height * 0.29,
            marginBottom: 100,
          }}
        >
          <AnimatedImage source={require('../assets/images/loader.png')} />
        </View>
      </ScrollView>
    </AppBackground>
  );
};

export default Loader;
