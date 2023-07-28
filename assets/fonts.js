import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Roboto_100Thin,Roboto_100Thin_Italic,Roboto_700Bold_Italic } from '@expo-google-fonts/roboto';

export function useCustomFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'RobotoThinItalic': Roboto_100Thin_Italic,
          'RobotoThin': Roboto_100Thin,
          'RobotoBoldItalic_700': Roboto_700Bold_Italic
        });

        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setFontsLoaded(false); // Set fontsLoaded to false to handle the error state
      }
    }

    loadFonts();
  }, []);

  return fontsLoaded;
}