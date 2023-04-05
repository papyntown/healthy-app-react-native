import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ScrollView,
    Dimensions,
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
                backgroundColor: COLORS.main,
            }}>
            <View
                style={{
                    position: "absolute",
                    top: -50,
                    left: -100,
                    right: 0,
                    height: 2500,
                    overflow: "hidden",
                }}>
                <View
                    style={{
                        backgroundColor: COLORS.secondary,
                        height: 160,
                        transform: [{ skewY: "342deg" }],
                    }}
                />
            </View>

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
            <View
                style={{
                    position: "absolute",
                    top: 600,
                    left: -440,
                    right: -500,
                    height: 2000,
                }}>
                <View
                    style={{
                        backgroundColor: COLORS.secondary,
                        height: 460,
                        transform: [{ skewY: "342deg" }],
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    circle: {},
});

export default calculator;
