import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePressMenu }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePressMenu}>
            <Image
                resizeMode="cover"
                source={iconUrl}
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;
