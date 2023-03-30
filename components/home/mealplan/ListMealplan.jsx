import { View, Text } from "react-native";
import React from "react";
import styles from "./listmealplan.style";

const ListMealplan = ({ mealData }) => {
    return (
        <View>
            <View>
                <Text>Macro nutriments</Text>
                <View style={styles.nutrients}>
                    <Text>
                        Calories : {mealData.nutrients.calories.toFixed(0)}
                    </Text>
                    <Text>
                        Protéines : {mealData.nutrients.protein.toFixed(0)}
                    </Text>
                    <Text>Lipides : {mealData.nutrients.fat.toFixed(0)}</Text>
                    <Text>
                        glucides : {mealData.nutrients.carbohydrates.toFixed(0)}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ListMealplan;
