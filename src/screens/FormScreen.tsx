import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { horizontalScale, moderateScale, verticalScale } from "../utils";
import { Colors } from "../constants";
import Input from "../components/Input/Input";
import Dropdown from "../components/Dropdown/Dropdown";
import Button from "../components/Button/Button";

const FormScreen = ({ navigation }: any) => {
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
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Completa la siguiente información</Text>
          <View style={styles.inputs}>
            <Input
              label="Fecha de inicio de la actividad"
              size="md"
              rounded="md"
            />
            <Input
              label="Ingresos anuales"
              size="md"
              rounded="md"
              type="numeric"
            />
            <Dropdown
              label="¿Unico jefe?"
              options={["Si", "No"]}
              rounded="md"
            />
            <Dropdown label="Rubro" options={["A", "B", "C"]} rounded="md" />
            <Input label="Dirección de la empresa 1" size="md" rounded="md" />
            <Input
              label="Dirección de la empresa 2 (Opcional)"
              size="md"
              rounded="md"
            />
            <Dropdown
              label="País"
              options={["Argentina", "Brasil", "Colombia", "Ecuador"]}
              rounded="md"
            />
            <Input label="Estado" size="md" rounded="md" />
            <Input label="Zip" size="md" rounded="md" type="numeric" />
            <Button
              title="Comenzar"
              color="primary"
              rounded="md"
              onPress={() => navigation.navigate("Loader")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    paddingHorizontal: horizontalScale(32),
  },
  formContainer: {
    paddingTop: verticalScale(28),
    paddingBottom: verticalScale(14),
    gap: moderateScale(32),
  },
  title: { fontSize: moderateScale(28), fontWeight: "500" },
  inputs: { gap: moderateScale(24) },
});
