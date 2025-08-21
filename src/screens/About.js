import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import AppBackground from '../components/AppBackground';
import Header from '../components/Header';

const { height } = Dimensions.get('window');

const About = () => {
  const navigation = useNavigation();

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Wild Crazy Friends Time is a fun party game with a wheel of challenges for the company. No bets, no winnings - just laughter, creativity and good mood.`,
      });
    } catch (error) {
      Alert(error.message);
    }
  };

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container]}>
          <Header title={'ABOUT APP'} screen={'About'} />
          <LinearGradient
            colors={['#B92D05', 'rgba(185, 45, 5, 0.72)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 44, marginTop: 63 }}
          >
            <View style={styles.rulesContainer}>
              <Text style={styles.title}>INFORMATIONS</Text>
              <Text style={styles.description}>
                {Platform.OS === 'ios'
                  ? `Wild Crazy Friends Time is a fun party game with a wheel of challenges for the company. No bets, no winnings - just laughter, creativity and good mood.`
                  : `Crown Wild Crazy Friends is a fun party game with a wheel of challenges for the company. No bets, no winnings - just laughter, creativity and good mood.`}
              </Text>
              <View style={styles.imgShadow}>
                {Platform.OS === 'ios' ? (
                  <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                  />
                ) : (
                  <Image
                    source={require('../assets/images/icon.png')}
                    style={styles.icon}
                  />
                )}

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.shareBtn}
                  onPress={handleShare}
                >
                  <Image source={require('../assets/icons/share.png')} />
                </TouchableOpacity>
              </View>

              <View style={styles.wrapper}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ left: -29 }}
                  onPress={() => navigation.goBack()}
                >
                  <Image source={require('../assets/images/back.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: height * 0.07, padding: 28 },
  rulesContainer: {
    width: '100%',
    padding: 38,
    paddingHorizontal: 25,
  },
  title: {
    fontWeight: '900',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 31,
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
  imgShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    flexDirection: 'row',
    gap: 30,
  },
  shareBtn: {
    top: 55,
  },
  logo: { width: 182, height: 182, borderRadius: 22, marginBottom: 120 },
  icon: {
    width: 182,
    height: 182,
    borderRadius: 22,
    marginBottom: 120,
    elevation: 20,
  },
});

export default About;
