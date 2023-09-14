import { ScrollView, Text, View, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants";
import { moderateScale, horizontalScale, verticalScale } from "../utils";
import Input from "../components/Input/Input";
import Dropdown from "../components/Dropdown/Dropdown";

const SignUpScreen = ({ navigation }: any) => {
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.subtitle}>
            {" "}
            ¿Ya tienes cuenta?{" "}
            <Text
              style={{ color: Colors.green }}
              onPress={() => navigation.navigate("SignIn")}
            >
              Inicia sesión
            </Text>
          </Text>
        </View>
        <View style={styles.inputs}>
          <Input label="Nombre" size="md" rounded="md" />
          <Input label="Apellido" size="md" rounded="md" />
          <Input label="Email" type="email" size="md" rounded="md" />
          <Dropdown
            label={"Sexo"}
            options={["Masculino", "Femenino"]}
            rounded="md"
          />
          <Dropdown
            label={"Área de trabajo"}
            options={["IT", "Administración"]}
            rounded="md"
          />
          <Input label="Nombre de la empresa" size="md" rounded="md" />
          <Input
            label="Número de contacto"
            type="numeric"
            size="md"
            rounded="md"
          />
          <Input label="Dato de contacto" size="md" rounded="md" />
          <Button
            title="Continuar"
            color="primary"
            rounded="md"
            onPress={() => navigation.navigate("TypeAccount")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    paddingHorizontal: horizontalScale(32),
  },
  titleContainer: { gap: verticalScale(8), paddingTop: verticalScale(32) },
  title: {
    color: Colors.black,
    fontSize: moderateScale(30),
    fontWeight: "500",
  },
  subtitle: { fontSize: moderateScale(14), fontWeight: "500" },
  inputs: {
    gap: verticalScale(25),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(36),
  },
});
