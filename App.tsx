import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './src/navigation/MainStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  );
}
