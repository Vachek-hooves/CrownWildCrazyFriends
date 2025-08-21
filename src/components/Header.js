import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({ title, screen }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}
    >
      {screen !== 'About' && (
        <>
          {Platform.OS === 'ios' ? (
            <View style={styles.imgShadow}>
              <Image
                source={require('../assets/images/logo.png')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 22,
                }}
                resizeMode="cover"
              />
            </View>
          ) : (
            <View style={styles.imgShadow}>
              <Image
                source={require('../assets/images/icon.png')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 22,
                  elevation: 20,
                }}
                resizeMode="cover"
              />
            </View>
          )}
        </>
      )}

      <LinearGradient
        colors={['#ffffffff', '#FFF8CE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.6 }}
        style={[styles.headerContainer]}
      >
        <LinearGradient
          colors={['rgba(253, 218, 22, 0.73)', 'rgba(255, 248, 206, 1)']}
          locations={[0, 0.3]}
          style={{
            ...StyleSheet.absoluteFillObject,
            borderRadius: 33,
            height: Platform.OS === 'ios' ? '40%' : '84%',
          }}
        />
        <Text style={[styles.headerText]}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  imgShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },

  headerContainer: {
    width: 181,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 33,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 20,
  },
  headerText: {
    fontWeight: '900',
    fontSize: 16,
    color: '#B92D05',
  },
});

export default Header;
