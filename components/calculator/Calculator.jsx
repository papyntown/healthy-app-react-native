import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, imagesArray } from "../../constants";
import { Image } from "react-native";
import styles from "./calculator.style";

const Calculator = () => {
    const [sexe, setSexe] = useState("");
    const [weight, setWeight] = useState("70");
    const [age, setAge] = useState("18");
    const [tall, setTall] = useState("168");
    const [calories, setCalories] = useState();
    const [physicalActivity, setPhysicalActivity] = useState();

    const agesArray = [];
    const tallsArray = [];
    const weightsArray = [];
    for (let i = 18; i <= 100; i++) {
        agesArray.push(i.toString());
    }
    for (let i = 150; i <= 215; i++) {
        tallsArray.push(i.toString());
    }
    for (let i = 40; i <= 120; i++) {
        weightsArray.push(i.toString());
    }

    return (
        <View>
            <View style={styles.icon}>
                <Ionicons
                    name="information-circle-outline"
                    size={24}
                    color={COLORS.link}
                />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Calcule facilement tes apports caloriques journaliers grâce
                    à notre outil intégré !{" "}
                </Text>
            </View>
            <View style={styles.pickerContainer}>
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
                        style={[styles.picker, styles.leftPicker]}
                        onValueChange={(itemValue) => setSexe(itemValue)}
                        dropdownIconColor={COLORS.link}>
                        <Picker.Item label="Homme" value="homme" />
                        <Picker.Item label={"Femme"} value="femme" />
                    </Picker>
                    <MaterialCommunityIcons
                        name="timer-sand-empty"
                        size={24}
                        color="black"
                    />
                    <Picker
                        selectedValue={age}
                        style={[styles.picker, styles.rightPicker]}
                        onValueChange={(itemValue) => setAge(itemValue)}
                        dropdownIconColor={COLORS.link}>
                        {agesArray.map((age) => (
                            <Picker.Item label={age} value={age} key={age} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.pickerWrapper}>
                    <MaterialCommunityIcons
                        name="human-male-height-variant"
                        size={24}
                        color="black"
                    />
                    <Picker
                        selectedValue={tall}
                        style={[styles.picker, styles.leftPicker]}
                        onValueChange={(itemValue) => setTall(itemValue)}
                        dropdownIconColor={COLORS.link}>
                        {tallsArray.map((tall) => (
                            <Picker.Item label={tall} value={tall} key={tall} />
                        ))}
                    </Picker>
                    <FontAwesome5 name="weight" size={24} color="black" />
                    <Picker
                        selectedValue={weight}
                        style={[styles.picker, styles.rightPicker]}
                        onValueChange={(itemValue) => setWeight(itemValue)}
                        dropdownIconColor={COLORS.link}>
                        {weightsArray.map((weight) => (
                            <Picker.Item
                                label={weight}
                                value={weight}
                                key={weight}
                            />
                        ))}
                    </Picker>
                </View>
                <View>
                    <Picker
                        selectedValue={physicalActivity}
                        style={[styles.picker, styles.pickerActivity]}
                        onValueChange={(itemValue) =>
                            setPhysicalActivity(itemValue)
                        }
                        itemStyle={{ backgroundColor: COLORS.background }}
                        dropdownIconColor={COLORS.link}>
                        <Picker.Item
                            label={"Peu ou pas d'exercice/sport"}
                            value={1.15}
                        />
                        <Picker.Item
                            label={"1-2 fois par semaine"}
                            value={1.25}
                        />
                        <Picker.Item
                            label={"3-5 fois par semaine"}
                            value={1.4}
                        />
                        <Picker.Item
                            label={"6-7 fois par semaine"}
                            value={1.55}
                        />
                        <Picker.Item
                            label={"6-7 fois par semaine & travail physique"}
                            value={1.7}
                        />
                    </Picker>
                </View>
            </View>
        </View>
    );
};

export default Calculator;
