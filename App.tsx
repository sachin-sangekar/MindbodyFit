import { StatusBar } from 'expo-status-bar';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigator';
import { useFonts } from 'expo-font';
import React from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
    Avertastevia: require('./assets/fonts/Avertastevia.ttf'),
    AvertaRegular: require('./assets/fonts/AvertaDemoPE-ExtraBold.otf'),
    ExtraBoldItalic: require('./assets/fonts/AvertaDemoPECuttedDemo-Regular.otf'),
  });

  if (!loaded) {
    return null;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <StackNavigator />
        <StatusBar />
      </NavigationContainer>
    );
  }
}
