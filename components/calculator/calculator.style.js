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
        color: COLORS.headline,
        textAlign: "center",
        paddingVertical: 40,
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
        fontSize: SIZES.large,
        fontWeight: FONT.bold,
        color: COLORS.background,
    },
    pickerActivity: {
        //j'aimerais que le texte soit au centre
    },
});
export default styles;
