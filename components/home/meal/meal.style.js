import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: COLORS.secondary,
        borderRadius: 15,
        backgroundColor: COLORS.main,
        alignItems: "center",
        position: "relative",
        marginBottom: SIZES.large,
    },
});

export default styles;
