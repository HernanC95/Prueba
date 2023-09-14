import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants";
import { horizontalScale, moderateScale, verticalScale } from "../utils";
import Input from "../components/Input/Input";
import Dropdown from "../components/Dropdown/Dropdown";
import Button from "../components/Button/Button";

const NewCreditScreen = ({ navigation }: any) => {
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
      <View style={{ gap: verticalScale(72), marginTop: verticalScale(32) }}>
        <View style={{ gap: verticalScale(12) }}>
          <Text style={styles.title}>Solicitar crédito</Text>
          <Text style={styles.subtitle}>
            Solicita hoy mismo tu crédito y accede a las oportunidades que tanto
            deseas.
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input label="Ingresa el monto" rounded="md" size="md" />
          <Dropdown
            label="Cuotas"
            options={["1", "3", "6", "9", "12"]}
            rounded="md"
          />
          <Text style={styles.text}>Interés aproximado $4.000</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Calcular intereses"
          color="primary"
          rounded="md"
          onPress={() => navigation.navigate("Calculate")}
        />
      </View>
    </View>
  );
};

export default NewCreditScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(32),
    justifyContent: "space-between",
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: "500",
  },
  subtitle: {
    color: Colors.grey,
    fontSize: moderateScale(14),
  },
  inputsContainer: {
    gap: moderateScale(40),
  },
  text: {
    color: Colors.lightGrey,
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: verticalScale(16),
  },
});
