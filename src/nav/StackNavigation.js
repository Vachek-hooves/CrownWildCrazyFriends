import { createStackNavigator } from '@react-navigation/stack';
import WelcomeWildTimeScreen from '../screens/WelcomeWildTimeScreen.js';
import Home from '../screens/Home';
import Rules from '../screens/Rules';
import About from '../screens/About';
import Game from '../screens/Game';
import Settings from '../screens/Settings';
import Gameplay from '../screens/Gameplay';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="WelcomeWildTimeScreen"
        component={WelcomeWildTimeScreen}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Gameplay" component={Gameplay} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
