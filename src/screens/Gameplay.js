import {
  Dimensions,
  Image,
  Modal,
  Platform,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';

import Wheel from '../components/Wheel';
import AnimatedImage from '../components/AnimatedImage';
import { useStore } from '../store/context';
import MediumButton from '../components/MediumButton';
import { tasks } from '../data/tasks';
import AppBackground from '../components/AppBackground';
import Orientation from 'react-native-orientation-locker';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

const { height } = Dimensions.get('window');

const Gameplay = ({ route }) => {
  const players = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const { setSelectedColor, selectedColor, randomPlayer, isEnabledMusic } =
    useStore();
  const [task, setTask] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [randomPlayerIdx, setRandomPlayerIdx] = useState(0);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
    }, []),
  );

  useEffect(() => {
    if (isEnabledMusic)
      try {
        SoundPlayer.playSoundFile('super_duper_fun_124565', 'mp3');
        SoundPlayer.setVolume(1.0);
        SoundPlayer.setNumberOfLoops(-1);
      } catch (e) {
        console.log('Error', e);
      }

    return () => {
      try {
        SoundPlayer.stop();
      } catch (e) {
        console.log('Error', e);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedColor) generateTask();
  }, [selectedColor]);

  useEffect(() => {
    if (selectedColor) getRandomPlayer();
  }, []);

  const getRandomPlayer = () => {
    const randomPlayer = Math.floor(Math.random() * players.length);

    setRandomPlayerIdx(randomPlayer);
  };

  const generateTask = () => {
    const filteredCategory = tasks.find(
      task => task.category === selectedColor,
    );
    const randomTask =
      filteredCategory.tasks[
        Math.floor(Math.random() * filteredCategory.tasks.length)
      ];

    setTask(randomTask);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Category: ${selectedColor}
Task: ${task}`,
      });
    } catch (error) {
      Alert(error.message);
    }
  };

  return (
    <AppBackground>
      {selectedColor && (
        <BlurView style={styles.blurBg} blurType="light" blurAmount={1} />
      )}
      <View
        style={[
          styles.container,
          selectedColor && { paddingTop: height * 0.08 },
        ]}
      >
        {isLoading ? (
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <AnimatedImage
              source={require('../assets/images/gameLoader.png')}
            />
            <Text style={styles.loaderText}>
              {`A GOOD MOOD IS COOL
 AND USEFUL!`}
            </Text>
          </View>
        ) : (
          <>
            <LinearGradient
              colors={['#ffffffff', '#FFF8CE']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0.6 }}
              style={[styles.gradientContainer]}
            >
              <LinearGradient
                colors={['rgba(253, 218, 22, 0.73)', 'rgba(255, 248, 206, 1)']}
                locations={[0, 0.3]}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: 37,
                  height: Platform.OS === 'ios' ? '40%' : '60%',
                }}
              />
              <Text style={[styles.gradientText]}>
                {selectedColor
                  ? `TASK FOR ${players[
                      randomPlayer ? randomPlayerIdx : currentPlayer
                    ].toUpperCase()}`
                  : `${players[
                      randomPlayer ? randomPlayerIdx : currentPlayer
                    ].toUpperCase()} SPINS THE WHEEL!`}
              </Text>
            </LinearGradient>

            <Wheel />
          </>
        )}
      </View>

      {selectedColor && (
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={{}}>
            <LinearGradient
              colors={['#B92D05', 'rgba(185, 45, 5, 0.72)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.containerWrap}
            >
              <View style={[styles.rulesContainer]}>
                <Text style={styles.categoryText}>
                  CATEGORY "{selectedColor.toUpperCase()}"
                </Text>

                <View style={styles.underline} />

                <Text style={styles.taskText}>{task}</Text>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.shareBtn}
                  onPress={handleShare}
                >
                  <Image source={require('../assets/icons/share.png')} />
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <View style={{ top: 230 }}>
              <View style={{ alignItems: 'center' }}>
                <MediumButton
                  title={'SKIP TASK'}
                  style={styles.btn}
                  borders={styles.btnBorders}
                  textStyle={styles.btnText}
                  onPress={() => generateTask()}
                />
                <MediumButton
                  title={'NEXT PLAYER'}
                  style={styles.btn}
                  borders={styles.btnBorders}
                  textStyle={styles.btnText}
                  onPress={() => {
                    setSelectedColor('');
                    if (players.length - 1 === currentPlayer)
                      setCurrentPlayer(0);
                    else {
                      setCurrentPlayer(currentPlayer + 1);
                    }
                    if (randomPlayer) getRandomPlayer();
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: height * 0.15, padding: 28, flex: 1 },
  rulesContainer: {
    width: '100%',
    padding: 30,
    paddingTop: 32,
    paddingHorizontal: 25,
    paddingBottom: 90,
    alignItems: 'center',
  },
  containerWrap: {
    borderRadius: 55,
    top: 220,
    marginHorizontal: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
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
  removeBtn: {
    position: 'absolute',
    right: -40,
    top: 17,
  },
  btn: {
    width: 237,
    height: 97,
    borderRadius: 33,
    marginBottom: 5,
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

  gradientContainer: {
    width: '100%',
    height: 99,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 33,
    marginTop: 17,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 80,
  },
  gradientText: {
    fontWeight: '900',
    fontSize: 24,
    color: '#B92D05',
    textAlign: 'center',
  },
  loaderText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#430F00',
    textAlign: 'center',
    top: 30,
  },
  categoryText: {
    fontWeight: '700',
    fontSize: 13,
    color: '#fff',
    marginBottom: 10,
  },
  taskText: {
    fontWeight: '900',
    fontSize: 20,
    color: '#fff',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center',
    height: 50,
  },
  underline: {
    width: 150,
    height: 0.8,
    backgroundColor: '#fff',
  },
  btn: {
    width: 237,
    height: 97,
    borderRadius: 33,
    marginBottom: 5,
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
  blurBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
});

export default Gameplay;
