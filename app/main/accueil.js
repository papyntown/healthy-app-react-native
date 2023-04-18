import { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, ScrollView, SafeAreaView, Text, StatusBar } from "react-native";
import { Link, Stack } from "expo-router";
import Welcome from "../../components/home/welcome/Welcome";
import { COLORS, icons, images, SIZES } from "../../constants";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";

const Home = () => {
    // Conserve les calories calculée dans le calculator
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.background,
                // Je l'empeche d'aller sur ma status bar
                marginTop: StatusBar.currentHeight,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        paddingTop: 0,
                    }}>
                    <View style={styles.circle} />
                    <Welcome />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    circle: {
        position: "absolute",
        left: "50%",
        transform: [{ translateX: -210 }, { translateY: -280 }],
        width: 450,
        height: 650,
        borderRadius: 600,
        backgroundColor: COLORS.secondary,
        zIndex: -1,
        opacity: 1,
    },
});

export default Home;
