import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function LoginPage() {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={200}
          color={colors.black}
        />
        <Text style={styles.tagline}>Attendance QR</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    top: 100,
    position: "absolute",
    alignItems: "center",
  },
  tagline: {
    paddingVertical: 30,
    fontSize: 30,
    fontWeight: "900",
    color: colors.black,
  },
  buttonsContainer: {
    width: "100%",
    padding: 30,
    paddingBottom: 50,
  },
});

export default LoginPage;
