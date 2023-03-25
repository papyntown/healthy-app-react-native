import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Salut Antony</Text>
                <Text style={styles.welcomeMessage}>Heatless Do more !!!</Text>
            </View>
        </View>
    );
};

export default Welcome;
