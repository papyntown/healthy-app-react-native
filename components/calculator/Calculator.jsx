import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { images } from "../../constants";
import { Image } from "react-native";

const Calculator = () => {
    // false = homme
    const [sexe, setSexe] = useState(false);
    const [weight, setWeight] = useState();
    const [age, setAge] = useState();
    const [tall, setTall] = useState();
    const [calories, setCalories] = useState();

    return (
        <View>
            <View style={styles.header}>
                <View></View>
                <Text>
                    Calcule facilement tes apports caloriques journaliers grâce
                    à notre outil intégré !{" "}
                    <Ionicons
                        name="information-circle-outline"
                        size={24}
                        color="black"
                    />
                </Text>
            </View>
            <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Genre :</Text>
                <View style={styles.pickerWrapper}>
                    {sexe === "homme" ? (
                        <MaterialCommunityIcons
                            name="gender-male"
                            size={24}
                            color="black"
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name="gender-female"
                            size={24}
                            color="black"
                        />
                    )}
                    <Picker
                        selectedValue={sexe}
                        style={styles.picker}
                        onValueChange={(itemValue) => setSexe(itemValue)}>
                        <Picker.Item label="Homme" value="homme" />
                        <Picker.Item label={"Femme"} value="femme" />
                    </Picker>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
    },
    pickerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    pickerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    pickerLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
    picker: {
        flex: 1,
    },
});

export default Calculator;
