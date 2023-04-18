import { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./welcome.style";
import { icons, images, SIZES, FONT, COLORS } from "../../../constants";
import { Dimensions } from "react-native";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import ListMealplan from "../mealplan/ListMealplan";
import axios from "axios";

const screenHeight = Dimensions.get("window").height;

const Welcome = () => {
    const [mealData, setMealData] = useState();
    const [calories, setCalories] = useState(1900);
    const [inputValueFocused, setInputValueFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const scrollViewRef = useRef();

    const getMealData = async () => {
        setIsLoading(true);
        await axios
            .get(
                `https://api.spoonacular.com/mealplanner/generate?apiKey=cbfbc351957c444aba94f906fdf811e5&timeFrame=day&targetCalories=${calories}`
            )
            .then((res) => {
                setMealData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        setIsLoading(false);
    };
    const getCaloricMaintenanceValue = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(
                "@caloric-maintenance"
            );
            return jsonValue != null
                ? setCalories(JSON.parse(jsonValue))
                : null;
        } catch (e) {
            // read error
        }
        console.log(caloriesCalculed, caloriesCalculed);
    };

    return (
        <View>
            <View style={styles.containerFirst(screenHeight)}>
                <View style={styles.imgContainer}>
                    <Image
                        resizeMode="cover"
                        source={images.healthyTop}
                        style={styles.imgTop}
                    />
                    <Image
                        resizeMode="cover"
                        source={images.healthyBottom}
                        style={styles.imgBottom("60%")}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>
                        Trouve le plan alimentaire qui te correspond !
                    </Text>
                    <Input
                        onSubmitEditing={() => getMealData()}
                        containerStyle={{}}
                        disabledInputStyle={{ background: "#004643" }}
                        inputContainerStyle={{
                            borderColor: COLORS.link,
                        }}
                        errorStyle={{}}
                        errorProps={{}}
                        onFocus={() => setInputValueFocused(true)}
                        onBlur={() => setInputValueFocused(false)}
                        inputStyle={[
                            styles.input,
                            inputValueFocused ? { color: COLORS.headline } : {},
                        ]}
                        label="Insérer le nombre de calories souhaité"
                        labelStyle={{
                            fontSize: 24,
                            color: COLORS.paragraph,
                        }}
                        leftIconContainerStyle={{}}
                        rightIcon={
                            <View style={{ flexDirection: "row-reverse" }}>
                                <Entypo
                                    name="check"
                                    size={30}
                                    color={COLORS.link}
                                    onPress={() => getMealData()}
                                />
                                <Ionicons
                                    name="md-nutrition-outline"
                                    size={30}
                                    color={COLORS.link}
                                    onPress={() => getCaloricMaintenanceValue()}
                                />
                            </View>
                        }
                        rightIconContainerStyle={{}}
                        placeholder="2200 (Kcal)"
                        value={`${calories}`}
                        keyboardType="numeric"
                        onChangeText={setCalories}
                    />
                </View>
            </View>
            {/* si Meal data alors tu verifie que le loading est fini */}
            {!isLoading ? (
                mealData ? (
                    <ListMealplan mealData={mealData} />
                ) : null
            ) : (
                <ActivityIndicator size="large" color={COLORS.primary} />
            )}
        </View>
    );
};

export default Welcome;
