import { Stack, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useHeaderHeight } from "@react-navigation/elements";

// On va faire en sorte de montrer l'ecran que si la font est prete
SplashScreen.preventAutoHideAsync();

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.secondary,
                headerShown: true,
                headerStyle: { height: 50 },
                // title: "",
            }}>
            <Tabs.Screen
                name="accueil"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="calculator"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="calculator" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="planningMealPlan"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="calendar" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default Layout;
