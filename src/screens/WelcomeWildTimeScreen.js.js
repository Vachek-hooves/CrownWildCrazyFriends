import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppBackground from '../components/AppBackground';
import MediumButton from '../components/MediumButton';
import WelcomeAnimationWrapper from '../components/WelcomeAnimationWrapper';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

export const onboard = [
  {
    title: 'Spin the Wheel',
    description:
      'Choose a player, press the button and spin the wheel! Random fun tasks are waiting for you that will definitely cheer up the whole company.',
    button: 'OKEY!',
    image: require('../assets/images/onboard/1.png'),
  },

  {
    title: 'Complete the task',
    description:
      'Get a funny or creative task and complete it in a limited time. The main thing is not to be shy!',
    button: 'CONTINUE!',
    image: require('../assets/images/onboard/2.png'),
  },

  {
    title: 'Play with Friends',
    description:
      'Pass the turn to another player and watch everyone complete incredible challenges. Let your imagination run wild!',
    button: 'START GAME!',
    image: require('../assets/images/onboard/3.png'),
  },
];

const WelcomeWildTimeScreen = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.container,
            index === 1 && { paddingTop: height * 0.06 },
          ]}
        >
          <WelcomeAnimationWrapper position={-height}>
            <Image
              source={onboard[index].image}
              style={index === 1 && { top: 40 }}
            />
          </WelcomeAnimationWrapper>
          <WelcomeAnimationWrapper>
            <View
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 5,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 15,
              }}
            >
              <LinearGradient
                colors={['#B92D05', 'rgba(185, 44, 5, 0.56)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 33, marginTop: 14 }}
              >
                <View style={styles.welcomeContainer}>
                  <Text style={styles.title}>{onboard[index].title}</Text>
                  <Text style={styles.description}>
                    {onboard[index].description}
                  </Text>
                  <MediumButton
                    title={onboard[index].button}
                    btnWidth={'55%'}
                    onPress={() => setIndex(prev => prev + 1)}
                  />
                </View>
              </LinearGradient>
            </View>
          </WelcomeAnimationWrapper>
        </View>
      </ScrollView>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: height * 0.11, alignItems: 'center', padding: 30 },
  welcomeContainer: {
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
  },
  description: {
    fontWeight: '700',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
  },
});

export default WelcomeWildTimeScreen;
