import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AppBackground from '../components/AppBackground';
import MainAppHeader from '../components/MainAppHeader';
import { useStore } from '../store/context';
import WelcomeAnimationWrapper from '../components/WelcomeAnimationWrapper';

const { height } = Dimensions.get('window');

const Settings = () => {
  const navigation = useNavigation();
  const {
    setRandomPlayer,
    setIsEnabledMusic,
    isEnabledMusic,
    order,
    setOrder,
    toggleMusic,
    setToggleMusic,
  } = useStore();

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container]}>
          <MainAppHeader title={'SETTINGS'} />
          <WelcomeAnimationWrapper>
            <LinearGradient
              colors={['#B92D05', 'rgba(185, 45, 5, 0.72)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 55, marginTop: 63 }}
            >
              <View style={styles.rulesContainer}>
                <Text style={styles.title}>BACKGROUND MUSIC</Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setToggleMusic(!toggleMusic),
                      setIsEnabledMusic(!isEnabledMusic);
                  }}
                  style={[styles.selectorContainer, toggleMusic && { gap: 15 }]}
                >
                  {toggleMusic && <Text style={styles.selectorText}>ON</Text>}
                  <View style={styles.selector} />
                  {!toggleMusic && <Text style={styles.selectorText}>OFF</Text>}
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={['#B92D05', 'rgba(185, 45, 5, 0.72)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 55, marginTop: 14 }}
            >
              <View style={[styles.rulesContainer]}>
                <Text style={styles.title}>ORDER OF PLAYERS</Text>
                <View style={styles.btnsWrap}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      setOrder(false), setRandomPlayer(false);
                    }}
                    style={[
                      styles.selectorContainer,
                      order && { opacity: 0.5 },
                    ]}
                  >
                    {!order && <View style={styles.selector} />}
                    <Text style={styles.selectorText}>In turn</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      setOrder(true), setRandomPlayer(true);
                    }}
                    style={[
                      styles.selectorContainer,
                      !order && { opacity: 0.5 },
                    ]}
                  >
                    {order && <View style={styles.selector} />}
                    <Text style={styles.selectorText}>Random</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ top: 14 }}
                onPress={() => navigation.goBack()}
              >
                <Image source={require('../assets/images/lBack.png')} />
              </TouchableOpacity>
            </View>
          </WelcomeAnimationWrapper>
        </View>
      </ScrollView>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: height * 0.07, padding: 28 },
  rulesContainer: {
    width: '100%',
    padding: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  description: {
    fontWeight: '700',
    fontSize: 15,
    color: '#fff',
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selector: {
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: '#B92D05',
  },
  selectorContainer: {
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 44,
    // width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  selectorText: {
    fontWeight: '900',
    fontSize: 16,
    color: '#000',
  },
  btnsWrap: { flexDirection: 'row', gap: 15, justifyContent: 'center' },
});

export default Settings;
