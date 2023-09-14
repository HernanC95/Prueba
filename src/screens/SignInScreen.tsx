import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants";
import { horizontalScale, moderateScale, verticalScale } from "../utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import FbLogo from "../assets/facebookLogo.svg";
import GoogleLogo from "../assets/googleLogo.svg";

const SignInScreen = ({ navigation }: any) => {
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <Text style={styles.subtitle}>
          {" "}
          ¿Nuevo usuario?{" "}
          <Text
            style={{ color: Colors.green }}
            onPress={() => navigation.navigate("SignUp")}
          >
            Crear cuenta
          </Text>
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input label="Email" rounded="md" size="md" />
        <Input label="Contraseña" rounded="md" size="md" />
      </View>
      <View style={styles.loginContainer}>
        <Text>¿Olvidaste tu contraseña?</Text>
        <Button
          title="Iniciar sesión"
          color="primary"
          rounded="md"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <Text style={{ textAlign: "center", color: Colors.grey }}>o</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Google" icon={<GoogleLogo />} border="sm" rounded="md" />
        <Button title="Facebook" icon={<FbLogo />} border="sm" rounded="md" />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Protegido por reCAPTCHA y sujeto a la{" "}
          <Text style={{ color: Colors.green }}>
            Política de Privacidad y Condiciones.
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(32),
  },
  titleContainer: {
    gap: verticalScale(8),
    marginTop: verticalScale(32),
    marginBottom: verticalScale(60),
  },
  title: {
    color: Colors.black,
    fontSize: moderateScale(44),
    fontWeight: "500",
  },
  subtitle: {
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
  inputsContainer: {
    gap: verticalScale(36),
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(45),
    marginBottom: verticalScale(52),
  },
  buttonsContainer: {
    gap: verticalScale(22),
    marginTop: verticalScale(36),
  },
  footerContainer: {
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: moderateScale(10),
  },
  footerText: {
    fontSize: moderateScale(12),
    color: Colors.grey,
  },
});
