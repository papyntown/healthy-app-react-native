import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import styles from "./meal.style";

const Meal = ({ meal }) => {
    const [imageUrl, setImageUrl] = useState("");
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
            <View style={{}}>
                {imageUrl && (
                    <Image
                        // style={{ width: "100%", height: 100 }}
                        // resizeMode="contain"
                        source={{ uri: imageUrl }}
                    />
                )}
            </View>
            <View>
                <Text>{meal.title}</Text>
                <Text>
                    <Ionicons name="time-outline" size={24} color="black" />{" "}
                    {meal.readyInMinutes} minute
                </Text>
                <Text>
                    <FontAwesome name="user" size={24} color="black" />{" "}
                    {meal.servings}
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => Linking.openURL(`${meal.sourceUrl}`)}>
                <Text>Voir la recette</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Meal;
