import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppBackground from '../components/AppBackground';
import MediumButton from '../components/MediumButton';
import WelcomeAnimationWrapper from '../components/WelcomeAnimationWrapper';

const { height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container]}>
          <WelcomeAnimationWrapper position={-height}>
            {Platform.OS === 'ios' ? (
              <Image source={require('../assets/images/homeLogo.png')} />
            ) : (
              <Image
                source={require('../assets/images/icon.png')}
                style={styles.logo}
              />
            )}
          </WelcomeAnimationWrapper>

          <WelcomeAnimationWrapper>
            <View style={Platform.OS === 'ios' ? { top: -230 } : { top: 35 }}>
              <MediumButton
                title={'START GAME'}
                onPress={() => navigation.navigate('WildTimeGameScreen')}
                style={styles.btn}
                borders={styles.btnBorders}
                textStyle={styles.btnText}
              />

              <MediumButton
                title={'GAME RULES'}
                onPress={() => navigation.navigate('WildTimeRulesScreen')}
                style={styles.btn}
                borders={styles.btnBorders}
                textStyle={styles.btnText}
              />

              <MediumButton
                title={'SETTINGS'}
                onPress={() => navigation.navigate('WildTimeSettingsScreen')}
                style={styles.btn}
                borders={styles.btnBorders}
                textStyle={styles.btnText}
              />

              <MediumButton
                title={'ABOUT APP'}
                onPress={() => navigation.navigate('WildTimeAboutScreen')}
                style={styles.btn}
                borders={styles.btnBorders}
                textStyle={styles.btnText}
              />
            </View>
          </WelcomeAnimationWrapper>
        </View>
      </ScrollView>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: height * 0.1, alignItems: 'center', padding: 30 },
  welcomeContainer: {
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },
  logo: { width: 209, height: 209, borderRadius: 55, elevation: 40 },
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
  btn: {
    width: 237,
    height: 97,
    borderRadius: 33,
    marginBottom: 22,
  },
  btnBorders: {
    width: 237,
    height: 105,
    left: -1,
    borderRadius: 33,
  },
  btnText: {
    fontWeight: '900',
    fontSize: 24,
    color: '#B92D05',
  },
  shadowWrapper: {
    borderRadius: 16,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    color: '#b52a0e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
