import { View, Text } from "react-native";
import React from "react";
import styles from "./listmealplan.style";
import { FONT, SIZES, COLORS } from "../../../constants";
import Meal from "../meal/Meal";

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
                        Glucides :{" "}
                        <Text style={{ color: COLORS.secondary }}>
                            {mealData.nutrients.carbohydrates.toFixed(0)}
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.cardsContainer}>
                {mealData.meals &&
                    mealData.meals.map((meal) => {
                        return <Meal key={meal.id} meal={meal} />;
                    })}
            </View>
        </View>
    );
};

export default ListMealplan;
