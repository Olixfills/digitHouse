import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalletPage from '../screens/WalletPage';
import WithdrawalPage from '../screens/WithdrawalPage';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Wallet" component={WalletPage} />
      <Stack.Screen name="Withdraw" component={WithdrawalPage} />
    </Stack.Navigator>
  );
};

export default AppStack;
