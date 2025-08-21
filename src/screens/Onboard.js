import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import AppBackground from '../components/AppBackground';
import { onboard } from '../data/onboard';
import MediumButton from '../components/MediumButton';

const { height } = Dimensions.get('window');

const Onboard = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const handleNextStep = () => {
    index === 2 ? navigation.replace('Home') : setIndex(index + 1);
  };

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.container,
            index === 1 && { paddingTop: height * 0.06 },
          ]}
        >
          <Image
            source={onboard[index].image}
            style={index === 1 && { top: 40 }}
          />
          <LinearGradient
            colors={['#B92D05', 'rgba(185, 45, 5, 0.72)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 55, marginTop: 14 }}
          >
            <View style={styles.welcomeContainer}>
              <Text style={styles.title}>{onboard[index].title}</Text>
              <Text style={styles.description}>
                {onboard[index].description}
              </Text>
              <MediumButton
                title={onboard[index].button}
                onPress={handleNextStep}
              />
            </View>
          </LinearGradient>
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

export default Onboard;
