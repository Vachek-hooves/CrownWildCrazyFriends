import { createStackNavigator } from '@react-navigation/stack';
import WelcomeWildTimeScreen from '../screens/WelcomeWildTimeScreen.js';
import WildTimeHomeScreen from '../screens/WildTimeHomeScreen.js';
import WildTimeRulesScreen from '../screens/WildTimeRulesScreen.js';
import WildTimeAboutScreen from '../screens/WildTimeAboutScreen.js';
import WildTimeGameScreen from '../screens/WildTimeGameScreen.js';
import WildTimeSettingsScreen from '../screens/WildTimeSettingsScreen.js';
import WildTimeGameplayScreen from '../screens/WildTimeGameplayScreen.js';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="WelcomeWildTimeScreen"
        component={WelcomeWildTimeScreen}
      />
      <Stack.Screen name="WildTimeHomeScreen" component={WildTimeHomeScreen} />
      <Stack.Screen
        name="WildTimeRulesScreen"
        component={WildTimeRulesScreen}
      />
      <Stack.Screen
        name="WildTimeAboutScreen"
        component={WildTimeAboutScreen}
      />
      <Stack.Screen name="WildTimeGameScreen" component={WildTimeGameScreen} />
      <Stack.Screen
        name="WildTimeSettingsScreen"
        component={WildTimeSettingsScreen}
      />
      <Stack.Screen
        name="WildTimeGameplayScreen"
        component={WildTimeGameplayScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
