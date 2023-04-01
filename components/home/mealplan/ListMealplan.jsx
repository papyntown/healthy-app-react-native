import { View, Text } from "react-native";
import React from "react";
import styles from "./listmealplan.style";
import { FONT, SIZES, COLORS } from "../../../constants";

const ListMealplan = ({ mealData }) => {
    return (
        <View>
            <View style={styles.arrayNutrients}>
                <Text style={styles.titleNutrients}>
                    Total de macronutriment{" "}
                </Text>
                <View style={styles.nutrientsContainer}>
                    <Text style={styles.nutrients}>
                        Protéines :{" "}
                        <Text style={{ color: COLORS.secondary }}>
                            {mealData.nutrients.protein.toFixed(0)}
                        </Text>
                    </Text>
                    <Text style={styles.nutrients}>
                        Lipides :{" "}
                        <Text style={{ color: COLORS.secondary }}>
                            {" "}
                            {mealData.nutrients.fat.toFixed(0)}
                        </Text>
                    </Text>
                    <Text style={styles.nutrients}>
                        glucides :{" "}
                        <Text style={{ color: COLORS.secondary }}>
                            {mealData.nutrients.carbohydrates.toFixed(0)}
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ListMealplan;
