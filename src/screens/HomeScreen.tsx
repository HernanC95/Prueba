import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants";
import { horizontalScale, moderateScale, verticalScale } from "../utils";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import CreditCard from "../assets/creditCardIcon.svg";

const HomeScreen = ({ navigation }: any) => {
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
      <View>
        <Text style={styles.title}>
          Bienvenido <Text style={{ color: Colors.black }}>Diego!</Text>
        </Text>
        <Text style={styles.subtitle}>¿Cómo deseas pagar?</Text>
        <Text style={styles.text}>
          Selecciona si deseas utilizar tu saldo disponible o solicitar un nuevo
          crédito.
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <Card
          title="Nuevo crédito"
          rounded="md"
          icon={<CreditCard />}
          direction="column"
        />
        <Card
          title="Utilizar saldo disponible"
          icon={<Text>$</Text>}
          subTitle="$4.000"
          rounded="md"
          direction="column"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continuar"
          color="primary"
          rounded="md"
          onPress={() => navigation.navigate("NewCredit")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(32),
    justifyContent: "space-between",
  },
  title: {
    fontSize: moderateScale(24),
    color: Colors.green,
    fontWeight: "500",
    marginTop: verticalScale(40),
  },
  subtitle: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    marginTop: verticalScale(8),
    marginBottom: verticalScale(16),
  },
  text: {
    fontSize: moderateScale(14),
    color: Colors.grey,
    fontWeight: "500",
  },
  cardContainer: {
    gap: verticalScale(40),
  },
  buttonContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginBottom: verticalScale(16),
  },
});
