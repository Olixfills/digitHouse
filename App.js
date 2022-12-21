import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/screens/LoginPage';
import WalletPage from './src/screens/WalletPage';
import WithdrawalPage from './src/screens/WithdrawalPage';
import HomeStack from './src/routes/HomeStack';
import AuthStack from './src/routes/AuthStack';
import AppStack from './src/routes/AppStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName="Home">
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
