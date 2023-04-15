import { View, Text } from "react-native";
import React from "react";

import { FONT, SIZES, COLORS } from "../../../constants";
import styles from "./arraycalories.style";

const ArrayCalories = ({ calories }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={[styles.cell, styles.perdre]}>
                    <Text style={[styles.title]}>Perdre</Text>
                    <Text style={[styles.calories, styles.textPerdre]}>
                        {Math.floor(calories * 0.85)}
                    </Text>
                </View>
                <View style={[styles.cell, styles.maintenir]}>
                    <Text style={[styles.title]}>Maintenir</Text>
                    <Text style={[styles.calories, styles.textMaintenir]}>
                        {calories}
                    </Text>
                </View>
                <View style={[styles.cell, styles.gagner]}>
                    <Text style={[styles.title]}>Gagner</Text>
                    <Text style={[styles.calories, styles.textGagner]}>
                        {Math.floor(calories * 1.1)}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ArrayCalories;
