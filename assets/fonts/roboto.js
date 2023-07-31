import * as Font from "expo-font";
import { useEffect, useState } from "react";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_700Bold_Italic,
  Roboto_300Light,
  Roboto_500Medium,
  Roboto_300Light_Italic,
} from "@expo-google-fonts/roboto";

export function useCustomFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          RobotoItalic_100: Roboto_100Thin_Italic,
          Roboto_100: Roboto_100Thin,
          RobotoBoldItalic_700: Roboto_700Bold_Italic,
          Roboto_300: Roboto_300Light,
          RobotoItalic_300: Roboto_300Light_Italic,
          RobotoMedium: Roboto_500Medium,
        });

        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
        setFontsLoaded(false);
      }
    }

    loadFonts();
  }, []);

  return fontsLoaded;
}
