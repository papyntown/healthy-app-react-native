import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: COLORS.secondary,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        alignItems: "center",
        position: "relative",
        marginBottom: SIZES.large,
        overflow: "hidden",
    },
    imageContainer: {
        width: "100%",
        height: 150,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        padding: SIZES.medium,
        alignItems: "flex-start",
    },
    title: {
        fontSize: FONT.h2,
        fontWeight: "bold",
        marginBottom: SIZES.small,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: SIZES.small,
    },
    iconText: {
        marginLeft: SIZES.small,
        fontSize: FONT.body,
    },
    button: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.small,
        alignItems: "center",
    },
    buttonText: {
        color: COLORS.white,
        fontSize: FONT.h3,
    },
});
export default styles;
