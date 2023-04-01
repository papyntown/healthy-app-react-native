import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    arrayNutrients: {
        borderWidth: 2,
        borderColor: COLORS.secondary,
        borderRadius: 15,
    },
    titleNutrients: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: SIZES.xLarge,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: COLORS.tertiary,
        color: COLORS.headline,
        fontFamily: FONT.bold,
    },
    nutrientsContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 20,
        padding: 12,
    },
    nutrients: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.main,
    },
    cardsContainer: {
        marginTop: SIZES.medium,
    },
});

export default styles;
