import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="white"
    />
  );
};

const styles = StyleSheet.create({
  //
});

export default CustomHeaderButton;
