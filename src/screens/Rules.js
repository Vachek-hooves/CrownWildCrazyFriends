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
import Header from '../components/Header';
import SpinImage from '../components/SpinImage';

const { height } = Dimensions.get('window');

const Rules = () => {
  const navigation = useNavigation();

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container]}>
          <Header title={'GAME RULES'} />
          <LinearGradient
            colors={['#B92D05', 'rgba(185, 45, 5, 0.72)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 44, marginTop: 63 }}
          >
            <View style={styles.rulesContainer}>
              <Text style={styles.title}>GAME RULES</Text>
              <Text style={styles.description}>
                {`Add all players, specifying their names and avatars.

Players take turns, starting with the one chosen randomly or manually.

On their turn, the player presses the “Spin” button to start the task wheel.

When the wheel stops, the player receives a task from the category it stopped on.

If a player refuses or does not have time to complete the task, the turn passes to the next player.

The game continues until the company decides to stop - there are no winners, the main thing is to have fun.`}
              </Text>

              <View style={styles.wrapper}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ top: 14 }}
                  onPress={() => navigation.goBack()}
                >
                  <Image source={require('../assets/images/back.png')} />
                </TouchableOpacity>
                <SpinImage />
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
    padding: 30,
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
});

export default Rules;
