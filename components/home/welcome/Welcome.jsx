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
import { icons, images, SIZES, FONT, COLORS } from "../../../constants";
import { Dimensions } from "react-native";
import { Input } from "@rneui/themed";

const screenHeight = Dimensions.get("window").height;

const Welcome = () => {
    const [inputValue, setInputValue] = useState();
    const [inputValueFocused, setInputValueFocused] = useState(false);
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
                        labelStyle={{ fontSize: 24, color: COLORS.paragraph }}
                        leftIconContainerStyle={{}}
                        rightIconContainerStyle={{}}
                        placeholder="2200 (Kcal)"
                        value={inputValue}
                        keyboardType="numeric"
                        onChangeText={setInputValue}
                    />
                </View>

                {/* pour que le ecrire <KeyboardAvoidingView/> */}
            </View>
        </View>
    );
};

export default Welcome;
