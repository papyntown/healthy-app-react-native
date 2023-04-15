import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
    },
    cell: {
        flex: 1,
        borderRadius: 10,
        paddingVertical: 15,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        marginBottom: 5,
        textAlign: "center",
        color: COLORS.background,
    },
    calories: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        textAlign: "center",
        color: COLORS.link,
    },
    perdre: {
        // backgroundColor: COLORS.tertiary,
    },
    maintenir: {
        // backgroundColor: COLORS.headline,
    },
    gagner: {
        // backgroundColor: COLORS.variantsSecondary,
    },
    textMaintenir: {
        color: COLORS.headline,
    },
    textPerdre: { color: COLORS.tertiary },
    textGagner: { color: COLORS.variantsSecondary },
});

export default styles;
