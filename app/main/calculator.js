import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ScrollView,
} from "react-native";
import React from "react";
import { COLORS, icons, images, SIZES } from "../../constants";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Calculator from "../../components/calculator/Calculator";

const calculator = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.secondary,
                marginTop: StatusBar.currentHeight,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        paddingTop: 0,
                    }}>
                    <Calculator />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    blabla: {},
});

export default calculator;
