import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import AppBackground from '../components/AppBackground';
import MediumButton from '../components/MediumButton';
import Header from '../components/Header';
import WelcomeAnimationWrapper from '../components/WelcomeAnimationWrapper';

const { height } = Dimensions.get('window');

const Game = () => {
  const navigation = useNavigation();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');
  const [index, setIndex] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const players = [player1, player2, player3, player4];

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container]}>
          <Header title={'START GAME'} />
          <WelcomeAnimationWrapper>
            <LinearGradient
              colors={['#B92D05', 'rgba(185, 45, 5, 0.72)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 55, marginTop: 53 }}
            >
              <View
                style={[
                  styles.rulesContainer,
                  showRules && { paddingTop: 32, paddingBottom: 36 },
                ]}
              >
                {showRules ? (
                  <View>
                    <Text style={styles.title}>GAME RULES</Text>
                    <Text
                      style={styles.description}
                    >{`Add all players, specifying their names and avatars.

Players take turns, starting with the one chosen randomly or manually.

On their turn, the player presses the “Spin” button to start the task wheel.

When the wheel stops, the player receives a task from the category it stopped on.

If a player refuses or does not have time to complete the task, the turn passes to the next player.

The game continues until the company decides to stop - there are no winners, the main thing is to have fun.`}</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 11,
                      }}
                    >
                      <TouchableOpacity
                        style={[
                          styles.checkBox,
                          isChecked && { backgroundColor: '#fff' },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => setIsChecked(true)}
                      >
                        {isChecked && (
                          <Image
                            source={require('../assets/icons/checked.png')}
                          />
                        )}
                      </TouchableOpacity>
                      <Text style={styles.checkText}>I READ RULES</Text>
                    </View>
                  </View>
                ) : (
                  <>
                    <Text style={styles.title}>ADD PLAYERS</Text>
                    <View style={{}}>
                      <TextInput
                        style={styles.input}
                        textAlign="center"
                        placeholder="ENTER NAME"
                        value={player1.toUpperCase()}
                        onChangeText={setPlayer1}
                        maxLength={12}
                        placeholderTextColor={'rgba(185, 45, 5, 0.45)'}
                      />
                      {player1 && (
                        <TouchableOpacity
                          activeOpacity={0.7}
                          style={styles.removeBtn}
                          onPress={() => setPlayer1('')}
                        >
                          <Image
                            source={require('../assets/icons/remove.png')}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    {index > 1 && (
                      <View style={{}}>
                        <TextInput
                          style={styles.input}
                          textAlign="center"
                          placeholder="ENTER NAME"
                          value={player2.toUpperCase()}
                          maxLength={12}
                          onChangeText={setPlayer2}
                          placeholderTextColor={'rgba(185, 45, 5, 0.45)'}
                        />
                        {player2 && (
                          <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.removeBtn}
                            onPress={() => setPlayer2('')}
                          >
                            <Image
                              source={require('../assets/icons/remove.png')}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    )}
                    {index > 2 && (
                      <View style={{}}>
                        <TextInput
                          style={styles.input}
                          textAlign="center"
                          placeholder="ENTER NAME"
                          value={player3.toUpperCase()}
                          maxLength={12}
                          onChangeText={setPlayer3}
                          placeholderTextColor={'rgba(185, 45, 5, 0.45)'}
                        />
                        {player3 && (
                          <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.removeBtn}
                            onPress={() => setPlayer3('')}
                          >
                            <Image
                              source={require('../assets/icons/remove.png')}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    )}
                    {index > 3 && (
                      <View style={{}}>
                        <TextInput
                          style={styles.input}
                          textAlign="center"
                          placeholder="ENTER NAME"
                          value={player4.toUpperCase()}
                          maxLength={12}
                          onChangeText={setPlayer4}
                          placeholderTextColor={'rgba(185, 45, 5, 0.45)'}
                        />
                        {player4 && (
                          <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.removeBtn}
                            onPress={() => setPlayer4('')}
                          >
                            <Image
                              source={require('../assets/icons/remove.png')}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    )}

                    {index > 1 && (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setIndex(index + 1)}
                        style={{ position: 'absolute', bottom: -80 }}
                      >
                        <Image source={require('../assets/images/add.png')} />
                      </TouchableOpacity>
                    )}
                    {index === 1 && (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setIndex(index + 1)}
                        style={{}}
                      >
                        <Image source={require('../assets/images/add.png')} />
                      </TouchableOpacity>
                    )}
                  </>
                )}
              </View>
            </LinearGradient>
          </WelcomeAnimationWrapper>

          <View style={{ alignItems: 'center', marginTop: 5 }}>
            {index > 2 && (
              <>
                {!showRules && (
                  <MediumButton
                    title={'NEXT'}
                    style={styles.btn}
                    borders={styles.btnBorders}
                    textStyle={styles.btnText}
                    btnWidth={'65%'}
                    onPress={() => setShowRules(true)}
                    isDisabled={!player1 || !player2 || !player3}
                  />
                )}
              </>
            )}

            <WelcomeAnimationWrapper>
              {isChecked ? (
                <MediumButton
                  title={'START GAME'}
                  style={styles.btn}
                  btnWidth={237}
                  textStyle={styles.btnText}
                  onPress={() => navigation.navigate('Gameplay', players)}
                />
              ) : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.goBack()}
                  style={{ top: 40 }}
                >
                  <Image source={require('../assets/images/back.png')} />
                </TouchableOpacity>
              )}
            </WelcomeAnimationWrapper>
          </View>
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
    paddingTop: 52,
    paddingHorizontal: 25,
    paddingBottom: 90,
    alignItems: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
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
  input: {
    width: 180,
    height: 63,
    backgroundColor: 'rgba(255, 248, 206, 1)',
    borderRadius: 33,
    fontWeight: '600',
    fontSize: 12,
    paddingHorizontal: 15,
    color: 'rgba(185, 45, 5, 0.45)',

    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 16,
  },
  removeBtn: {
    position: 'absolute',
    right: -40,
    top: 17,
  },
  btn: {
    height: 97,
    borderRadius: 33,
    marginBottom: 5,
  },
  btnBorders: {
    height: 105,
    left: -1,
    borderRadius: 33,
  },
  btnText: {
    fontWeight: '900',
    fontSize: 24,
    color: '#B92D05',
  },
  checkBox: {
    width: 46,
    height: 46,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    fontWeight: '900',
    fontSize: 16,
    color: '#fff',
  },
});

export default Game;
