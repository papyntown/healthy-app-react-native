import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";

import styles from "./index.style";
import Mealplan from "../components/home/mealplan/Mealplan";

const Home = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.background,
            }}>
            <Stack.Screen
                options={{
                    // headerTransparent: true,
                    headerStyle: { backgroundColor: COLORS.headline },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                        />
                    ),
                    headerTitle: "",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        paddingTop: 0,
                    }}>
                    <View style={styles.circle} />
                    <Welcome />
                    <Mealplan />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Home;
