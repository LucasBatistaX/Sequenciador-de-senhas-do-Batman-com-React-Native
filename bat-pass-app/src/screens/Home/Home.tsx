import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatLogo/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatLogo/BatButton/BatButton";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>
      <View style={styles.inputContainer}>
        <BatButton/>
      </View>

      <StatusBar style="inverted"/>
    </View>
  );
}
