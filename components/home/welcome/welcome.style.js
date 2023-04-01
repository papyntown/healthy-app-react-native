import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    containerFirst: (screenHeight) => ({
        height: screenHeight - 11,
        // borderWidth: 1,
        // borderColor: "blue",
    }),
    imgContainer: {
        alignItems: "center",
        height: "60%",
    },
    imgTop: {
        width: "100%",
        height: "45%",
        resizeMode: "contain",
        position: "relative",
        top: 38,
    },
    imgBottom: (dimension) => ({
        width: "90%",
        height: "30%",
        resizeMode: "contain",
        position: "relative",
    }),
    inputContainer: {
        gap: 40,
    },
    inputHeader: {
        fontSize: 28,
        fontFamily: FONT.bold,
        color: COLORS.headline,
        textAlign: "center",
    },
    input: {
        fontSize: SIZES.xLarge,
    },
    buttonPressed: {
        transform: [{ scale: 1 }],
    },
});

export default styles;
