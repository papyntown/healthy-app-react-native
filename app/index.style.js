import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
    circle: {
        position: "absolute",
        left: "50%",
        // transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
        transform: [{ translateX: -210 }, { translateY: -280 }],
        width: 450,
        height: 650,
        borderRadius: 600,
        backgroundColor: COLORS.secondary,
        zIndex: -1,
        opacity: 1,
    },
});

export default styles;
