import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const planningMealPlan = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <Text>
                Ici tu retrouvera tous t'es plan alimentaire sauvegarder
            </Text>
        </SafeAreaView>
    );
};

export default planningMealPlan;
