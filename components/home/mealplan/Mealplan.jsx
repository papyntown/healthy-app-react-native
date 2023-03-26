import { useState } from "react";
import { useRouter } from "expo-router";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";

import styles from "./mealplan.style";
import { COLORS, SIZES } from "../../../constants";

import React from "react";
import { Button } from "@rneui/themed";

const RaisedButton = (props) => <Button raised radius={60} {...props} />;

const Mealplan = () => {
    const router = useRouter();
    return <RaisedButton title="Yea" />;
};

export default Mealplan;
