import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
    header: {
        marginBottom: 0,
    },
    icon: {
        position: "absolute",
        right: 0,
        top: 10,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xxLarge,
        color: COLORS.black,
        textAlign: "center",
        paddingTop: 40,
        marginBottom: 20,
    },
    pickerContainer: {
        // backgroundColor: COLORS.secondary,
        borderRadius: 20,
    },
    pickerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 4,
    },
    picker: {
        flex: 1,
    },
    pickerItem: {
        fontSize: SIZES.large,
        textAlign: "center",
        color: COLORS.background,
    },

    pickerActivity: {
        //j'aimerais que le texte soit au centre
    },
    buttonContainer: {
        marginTop: 0,
        backgroundColor: COLORS.link,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.headline,
        fontSize: SIZES.large,
        fontWeight: "bold",
        textAlign: "center",
    },
});
export default styles;
