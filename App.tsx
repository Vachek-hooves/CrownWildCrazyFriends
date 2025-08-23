import { NavigationContainer } from '@react-navigation/native';
import WildTimeMainLoader from './src/components/WildTimeMainLoader';
import { WildTimeGameContextProvider } from './src/store/context';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeWildTimeScreen from './src/screens/WelcomeWildTimeScreen.js';
import WildTimeHomeScreen from './src/screens/WildTimeHomeScreen.js';
import WildTimeRulesScreen from './src/screens/WildTimeRulesScreen.js';
import WildTimeAboutScreen from './src/screens/WildTimeAboutScreen.js';
import WildTimeGameScreen from './src/screens/WildTimeGameScreen.js';
import WildTimeSettingsScreen from './src/screens/WildTimeSettingsScreen.js';
import WildTimeGameplayScreen from './src/screens/WildTimeGameplayScreen.js';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <WildTimeGameContextProvider>
        {isLoading ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WelcomeWildTimeScreen"
              component={WelcomeWildTimeScreen}
            />
            <Stack.Screen
              name="WildTimeHomeScreen"
              component={WildTimeHomeScreen}
            />
            <Stack.Screen
              name="WildTimeRulesScreen"
              component={WildTimeRulesScreen}
            />
            <Stack.Screen
              name="WildTimeAboutScreen"
              component={WildTimeAboutScreen}
            />
            <Stack.Screen
              name="WildTimeGameScreen"
              component={WildTimeGameScreen}
            />
            <Stack.Screen
              name="WildTimeSettingsScreen"
              component={WildTimeSettingsScreen}
            />
            <Stack.Screen
              name="WildTimeGameplayScreen"
              component={WildTimeGameplayScreen}
            />
          </Stack.Navigator>
        ) : (
          <WildTimeMainLoader />
        )}
      </WildTimeGameContextProvider>
    </NavigationContainer>
  );
};

export default App;
