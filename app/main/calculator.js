// import { View, Text, SafeAreaView, StyleSheet } from "react-native";
// import React from "react";

// const calculator = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <Text>calculator</Text>
//         </SafeAreaView>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         borderWidth: 1,
//         borderColor: "blue",
//     },
// });

// export default calculator;

import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { FONT, SIZES, COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
const calculator = () => {
    const [imageUrl, setImageUrl] = useState(
        "https://spoonacular.com/recipeImages/1100990-556x370.jpg"
    );
    const router = useRouter();

    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => router.push("../modal")}>
                {imageUrl && (
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: imageUrl }}
                    />
                )}
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Crêpes au chocolat</Text>
                <View style={styles.iconContainer}>
                    <Ionicons name="time-outline" size={24} color="black" />
                    <Text style={styles.iconText}>3 min</Text>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.iconText}>3</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Voir la recette</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: COLORS.secondary,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        alignItems: "center",
        position: "relative",
        marginBottom: SIZES.large,
        overflow: "hidden",
    },
    imageContainer: {
        width: "100%",
        height: 150,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        padding: SIZES.medium,
        alignItems: "flex-start",
    },
    title: {
        fontSize: FONT.h2,
        fontWeight: "bold",
        marginBottom: SIZES.small,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: SIZES.small,
    },
    iconText: {
        marginLeft: SIZES.small,
        fontSize: FONT.body,
    },
    button: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.small,
        alignItems: "center",
    },
    buttonText: {
        color: COLORS.white,
        fontSize: FONT.h3,
    },
});
export default calculator;
