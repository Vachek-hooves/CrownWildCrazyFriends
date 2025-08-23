import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';

import GameplayWheel from '../components/GameplayWheel';
import AnimatedImage from '../components/AnimatedImage';
import { useStore } from '../store/context';
import MediumButton from '../components/MediumButton';
import Orientation from 'react-native-orientation-locker';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

const { height } = Dimensions.get('window');

export const tasks = [
  {
    category: 'Friendship',
    tasks: [
      'Compliment the person on your right.',
      'Hug anyone in the room.',
      'Hug anyone in the room.',
      'Give your neighbor on your left a friendly nickname.',
      'Tell a short story about how you met anyone here.',
      'Take a selfie with any player.',
      'Shake hands with every player.',
      'Thank someone for something good.',
      'Name three good qualities about the player across from you.',
      'Make a “heart” with your hands for the camera/audience.',
      'Smile and say “You’re awesome!” to the person on your right.',
      'Compliment someone’s outfit.',
      'Share a nice memory about one of the players.',
      'Make a friendly joke about the neighbor on your left.',
      'Give anyone a “high five.”',
      'Make up and say a group greeting.',
      'Wink and smile.',
      'Name one thing you have in common with another player.',
      'Show a gesture of support.',
      'Shout “We’re friends forever!”',
      'Dance with anyone for 5 seconds.',
      'Wish the player after you good luck.',
      'Pose together for a photo.',
      'Share your favorite meme on your phone.',
      'Take a selfie with someone making the funniest face.',
      'Name your “game partner” for this round.',
      'Raise your hand and say “I love you guys!”',
      'Give someone a “like” (with a gesture or a word).',
      'Share a piece of advice you once received from a friend.',
      'Name 3 reasons why it’s fun to be here.',
      'Take a “group selfie” with everyone.',
    ],
  },

  {
    category: 'Talent / Show',
    tasks: [
      'Sing the first verse of any song.',
      'Show a dance for 5 seconds.',
      'Show a dance for 5 seconds.',
      'Impersonate a famous character.',
      'Read a poem (you can make it up on the fly).',
      'Beatbox for 5 seconds.',
      'Make an animal sound.',
      'Make up and sing a funny song.',
      'Show a magic trick (even a simple one).',
      'Impersonate a TV presenter.',
      'Impersonate singing a giant opera.',
      'Show a funny move.',
      'Make up and dance a new dance.',
      'Pretend you’re in a horror movie.',
      'Make a parody of anyone in the room.',
      'Draw something in the air with your finger.',
      'Impersonate a drum beat.',
      'Show what your autograph would look like.',
      'Impersonate a model on the catwalk.',
      'Come up with and say a funny slogan.',
      'Do a superhero gesture.',
      'Imitate the voice of a radio announcer.',
      'Come up with and do a fan shout.',
      'Show how you are happy about the victory.',
      'Imitate a famous song without words.',
      'Depict the steps of a robot.',
      'Pretend to play an imaginary guitar.',
      'Depict an athlete celebrating a win.',
      'Come up with a dance for this game.',
      'Tell a joke like a stand-up comedian.',
      'Do a “triumphant” pose.',
    ],
  },

  {
    category: 'Lightbulb',
    tasks: [
      'Invent a new word and explain its meaning.',
      'Draw an animal in the air.',
      'Come up with an advertisement for an imaginary product.',
      'Come up with a short fairy tale.',
      'Make up a rhyme for the word “friend”.',
      'Invent a new game for this company.',
      'Come up with a motto for your team.',
      'Make up a funny news headline.',
      'Draw an imaginary portrait of a friend.',
      'Invent a new emoji and describe it.',
      'Come up with a strange way to say hello.',
      'Come up with a name for a pet dragon.',
      'Come up with a superpower for yourself.',
      'Come up with an alternative ending to a famous fairy tale.',
      'Make up a story in 5 words.',
      'Invent a new flavor of ice cream.',
      'Come up with your own coat of arms.',
      'Come up with the name of a new planet.',
      'Describe an imaginary animal.',
      'Invent a strange transport of the future.',
      'Invent your own sport.',
      'Describe your perfect day in 10 words.',
      'Invent a joke on the spot.',
      'Invent a name for a group of friends.',
      'Invent a funny password.',
      'Invent an original way to say “thank you”.',
      'Invent a recipe for an unusual dish.',
      'Describe a funny dream.',
      'Invent a name for a holiday.',
      'Invent your own toast.',
    ],
  },

  {
    category: 'Quick Reaction',
    tasks: [
      'Touch something red.',
      'Stand up and raise your hands up.',
      'Turn around three times.',
      'Touch the door.',
      'Clap your hands 5 times.',
      'Show “like” with your hand.',
      'Stand on one foot for 3 seconds.',
      'Jump up twice.',
      'Touch the wall.',
      'Touch your elbow to your knee.',
      'Make a circle around yourself.',
      'Squat 3 times.',
      'Shake someone’s hand.',
      'Take two steps back.',
      'Touch the floor.',
      'Look out the window.',
      'Clap with your neighbor.',
      'Sit down and quickly stand up.',
      'Turn your head left and right.',
      'Pick up any object from the floor.',
      'Touch your nose.',
      'Wave at everyone.',
      'Look at the ceiling.',
      'Touch your shoe.',
      'Tap the table.',
      'Turn your back on anyone.',
      'Touch your ear.',
      'Raise your hand and say “I’m ready!”',
      'Take a step forward.',
      'Jump in place for 5 seconds.',
    ],
  },

  {
    category: 'Conversation / Questions',
    tasks: [
      'Tell a funny story.',
      'Answer any question from the player.',
      'Name your favorite color.',
      'Share your favorite food.',
      'Tell me where you dream of going.',
      'Name the last movie you watched.',
      'Share your hobby.',
      'Name your favorite song.',
      'Tell me what superpower you would like to have.',
      'Share your favorite game.',
      'Tell me what made you laugh today.',
      'Name your favorite drink.',
      'Share your dream.',
      'Tell me what you did yesterday.',
      'Name your favorite season.',
      'Tell me about your ideal weekend.',
      'Name your favorite cartoon character.',
      'Share a childhood memory.',
      'Tell me what you can cook.',
      'Name a place you would like to go.',
      'Share the funniest phrase you have ever heard.',
      'Tell me about your first job/school.',
      'Name your favorite childhood game.',
      'Share a funny story from your life.',
      'Tell me what gift you would like to receive.',
      'Name a country you would like to live in.',
      'Share a joke.',
      'Name three favorite things.',
      'Tell me what you would do if you won a million.',
      'Share your motto for life.',
    ],
  },

  {
    category: 'Emotions',
    tasks: [
      'Depict joy.',
      'Depict sadness.',
      'Depict surprise.',
      'Depict anger (funny).',
      'Depict shame.',
      'Depict feeling very cold.',
      'Depict shock.',
      'Depict something disgusting.',
      'Depict falling in love.',
      'Depict drowsiness.',
      'Depict fear (funny).',
      'Depict pride.',
      'Depict winning a prize.',
      'Depict waiting.',
      'Depict feeling a pain in your leg.',
      'Depict being bitten by a mosquito.',
      'Depict tasting a lemon.',
      'Depict smelling a pleasant smell.',
      'Depict feeling bored.',
      'Depict confused.',
      'Imagine seeing something small and cute.',
      'Imagine sneezing.',
      'Imagine being allergic to flowers.',
      'Imagine being at the seaside.',
      'Imagine being photographed unexpectedly.',
      'Imagine being surprised by a gift.',
      'Imagine being called from afar.',
      'Imagine hearing something funny.',
      'Imagine being at a wedding.',
      'Imagine being woken up in the middle of the night.',
    ],
  },
];

const WildTimeGameplayScreen = ({ route }) => {
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
        console.log('e', e);
      }

    return () => {
      try {
        SoundPlayer.stop();
      } catch (e) {
        console.log('e', e);
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
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={{ flex: 1 }}
    >
      {selectedColor && (
        <BlurView style={styles.blurBg} blurType="dark" blurAmount={1} />
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
              colors={['rgba(255, 248, 206, 1)', 'rgba(222, 205, 109, 1)']}
              style={styles.gradientContainer}
            >
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

            <GameplayWheel />
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
              <View style={{ alignItems: 'center', gap: 20 }}>
                <MediumButton
                  title={'SKIP TASK'}
                  btnWidth={'55%'}
                  style={styles.btn}
                  textStyle={styles.btnText}
                  onPress={() => generateTask()}
                />
                <MediumButton
                  title={'NEXT PLAYER'}
                  btnWidth={'55%'}
                  style={styles.btn}
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
    </ImageBackground>
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
    height: 97,
    borderRadius: 33,
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
    fontWeight: '800',
    fontSize: 22,
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

export default WildTimeGameplayScreen;
