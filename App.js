import React, {useEffect, useCallback} from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Produto from './src/screens/produto';
import {  Montserrat_700Bold,
          Montserrat_400Regular, 
          useFonts
         } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar />
        <Produto {...mock} />
    </SafeAreaView>
  );
}
