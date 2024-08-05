import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    LeagueSpartanRegular: require('../assets/fonts/LeagueSpartan-Regular.ttf'),
    LeagueSpartanLigth: require('../assets/fonts/LeagueSpartan-Light.ttf'),
    LeagueSpartanBold: require('../assets/fonts/LeagueSpartan-Bold.ttf'),
    LeagueSpartanBlack: require('../assets/fonts/LeagueSpartan-Black.ttf'),
    LeagueSpartanMedium: require('../assets/fonts/LeagueSpartan-Medium.ttf'),
    LeagueSpartanThin: require('../assets/fonts/LeagueSpartan-Thin.ttf'),
    LeagueSpartanSemiBold: require('../assets/fonts/LeagueSpartan-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='onboarding'>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}