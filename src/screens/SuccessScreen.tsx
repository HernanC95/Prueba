import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants";
import { horizontalScale, moderateScale, verticalScale } from "../utils";
import Succes from "../assets/Success.svg";

const SuccessScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.mainContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.container}>
        <View style={{ alignItems: "center", gap: moderateScale(28) }}>
          {/* <Succes /> */}
          <Text style={styles.title}>Tu línea crediticia es de: </Text>
        </View>
        <Text style={styles.text}>$100.000 a $230.000</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="primary"
          rounded="md"
          title="Continuar aplicación"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(32),
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(60),
  },
  title: {
    color: Colors.grey,
    fontSize: moderateScale(16),
  },
  text: {
    color: Colors.black,
    fontSize: moderateScale(28),
    fontWeight: "500",
  },
  buttonContainer: {
    marginBottom: verticalScale(14),
  },
});
