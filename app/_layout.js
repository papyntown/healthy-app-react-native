import { Stack, Tabs } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { COLORS } from "../constants";

// On va faire en sorte de montrer l'ecran que si la font est prete
SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    // comme un useEffect
    // On va faire en sorte de montrer l'ecran que si la font est prete
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) return null;
    return (
        <Stack
            // onLayout={onLayoutRootView}
            // screenOptions={{
            //     headerStyle: { backgroundColor: COLORS.secondary },
            //     headerTintColor: COLORS.black,
            //     headerStatusBarHeight: 0, // définit la hauteur de l'en-tête sur 0
            // }}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="main" options={{}} />
        </Stack>
    );
};

export default Layout;
