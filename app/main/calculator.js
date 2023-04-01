import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const calculator = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>calculator</Text>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "blue",
    },
});

export default calculator;
