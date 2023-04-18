import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, imagesArray } from "../../constants";
import { Image } from "react-native";
import styles from "./calculator.style";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import ArrayCalories from "./arrayCalories/ArrayCalories";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Calculator = () => {
    const [sexe, setSexe] = useState("");
    const [weight, setWeight] = useState("70");
    const [age, setAge] = useState("18");
    const [tall, setTall] = useState("168");
    const [calories, setCalories] = useState();
    const [physicalActivity, setPhysicalActivity] = useState(1.15);
    const router = useRouter();

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
    setCaloricMaintenanceValue = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@caloric-maintenance", jsonValue);
        } catch (e) {
            // save error
        }

        console.log("Votre maintenance calorique a etait prise en compte.");
    };
    getCaloricMaintenanceValue = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(
                "@caloric-maintenance"
            );
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // read error
        }

        console.log("Vous avez recuperez votre total calorique.");
    };

    const calculateCalories = () => {
        let calories;
        if (sexe === "homme") {
            calories =
                10 * parseFloat(weight) +
                6.25 * parseFloat(tall) -
                5 * parseFloat(age) +
                5;
        } else {
            calories =
                10 * parseFloat(weight) +
                6.25 * parseFloat(tall) -
                5 * parseFloat(age) -
                161;
        }

        calories = Math.round(calories * physicalActivity);
        setCalories(calories);
        setCaloricMaintenanceValue(calories);
    };

    return (
        <View style={{ marginTop: StatusBar.currentHeight }}>
            <TouchableOpacity
                style={styles.icon}
                // onPress={() => router.push("/info")}
            >
                <Ionicons
                    name="information-circle-outline"
                    size={34}
                    color={COLORS.link}
                />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {/* Calcule tes calories avec notre outil ! */}
                    Calcule facilement tes apports caloriques journaliers grâce
                    à notre outil intégré !
                </Text>
            </View>
            <View style={styles.pickerContainer}>
                <View style={styles.pickerWrapper}>
                    {sexe === "homme" ? (
                        <MaterialCommunityIcons
                            name="gender-male"
                            size={24}
                            color={COLORS.background}
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name="gender-female"
                            size={24}
                            color={COLORS.background}
                        />
                    )}
                    <Picker
                        selectedValue={sexe}
                        style={[styles.picker, styles.leftPicker]}
                        onValueChange={(itemValue) => setSexe(itemValue)}
                        dropdownIconColor={COLORS.link}>
                        <Picker.Item
                            label="Homme"
                            style={styles.pickerItem}
                            value="homme"
                        />
                        <Picker.Item
                            label={"Femme"}
                            style={styles.pickerItem}
                            value="femme"
                        />
                    </Picker>
                    <MaterialCommunityIcons
                        name="timer-sand-empty"
                        size={24}
                        color={COLORS.background}
                    />
                    <Picker
                        selectedValue={age}
                        style={[styles.picker, styles.rightPicker]}
                        onValueChange={(itemValue) => setAge(itemValue)}
                        dropdownIconColor={COLORS.link}>
                        {agesArray.map((age) => (
                            <Picker.Item
                                label={age}
                                style={styles.pickerItem}
                                value={age}
                                key={age}
                            />
                        ))}
                    </Picker>
                </View>
                <View style={styles.pickerWrapper}>
                    <MaterialCommunityIcons
                        name="human-male-height-variant"
                        size={24}
                        color={COLORS.background}
                    />
                    <Picker
                        selectedValue={tall}
                        style={[styles.picker, styles.leftPicker]}
                        onValueChange={(itemValue) => setTall(itemValue)}
                        dropdownIconColor={COLORS.link}>
                        {tallsArray.map((tall) => (
                            <Picker.Item
                                label={tall}
                                value={tall}
                                key={tall}
                                style={styles.pickerItem}
                            />
                        ))}
                    </Picker>

                    <FontAwesome5
                        name="weight"
                        size={24}
                        color={COLORS.background}
                    />
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
                                style={styles.pickerItem}
                            />
                        ))}
                    </Picker>
                </View>
                <View style={styles.pickerWrapper}>
                    <FontAwesome5
                        name="running"
                        size={24}
                        color={COLORS.background}
                    />
                    <Picker
                        selectedValue={physicalActivity}
                        style={[styles.picker, styles.pickerActivity]}
                        onValueChange={(itemValue) =>
                            setPhysicalActivity(itemValue)
                        }
                        itemStyle={{ backgroundColor: COLORS.background }}
                        dropdownIconColor={COLORS.link}>
                        <Picker.Item
                            style={styles.pickerItem}
                            label={"Peu ou pas d'exercice/sport"}
                            value={1.15}
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label={"1-2 fois par semaine"}
                            value={1.25}
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label={"3-5 fois par semaine"}
                            value={1.4}
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label={"6-7 fois par semaine"}
                            value={1.55}
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label={"6-7 fois par semaine & +"}
                            value={1.7}
                        />
                    </Picker>
                </View>
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => calculateCalories()}>
                <Text style={styles.buttonText}>Calculer</Text>
            </TouchableOpacity>

            {calories && <ArrayCalories calories={calories} />}
        </View>
    );
};

export default Calculator;
