import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import styles from "./meal.style";
import { useRouter } from "expo-router";

const Meal = ({ meal }) => {
    const [imageUrl, setImageUrl] = useState("");
    const router = useRouter();
    useEffect(() => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cbfbc351957c444aba94f906fdf811e5&includeNutrition=false`
            )
            .then((res) => res.data)
            .then((data) => setImageUrl(data.image))
            .catch(() => {
                console.log("error Img");
            });
    }, [meal.id]);
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
                <Text style={styles.title}>{meal.title}</Text>
                <View style={styles.iconContainer}>
                    <Ionicons name="time-outline" size={24} color="black" />
                    <Text style={styles.iconText}>
                        {" "}
                        {meal.readyInMinutes} min
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.iconText}> {meal.servings}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text
                    style={styles.buttonText}
                    onPress={() => Linking.openURL(`${meal.sourceUrl}`)}>
                    Voir la recette
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Meal;
