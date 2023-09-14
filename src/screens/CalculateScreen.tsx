import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants";
import { horizontalScale, moderateScale, verticalScale } from "../utils";
import Button from "../components/Button/Button";

const CalculateScreen = ({ navigation }: any) => {
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
      <View style={{ gap: verticalScale(36), marginTop: verticalScale(28) }}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Calcular interés</Text>
          <Text style={styles.subtitle}>CFT: $54.000</Text>
          <Text style={styles.text}>Costo total financiero</Text>
        </View>
        <View style={styles.listItems}>
          <View style={styles.item}>
            <Text style={styles.textItem}>MONTO DEL CRÉDITO</Text>
            <Text style={styles.numberItems}>$40.000</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.textItem}>IMPUESTOS</Text>
            <Text style={styles.numberItems}>$300</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.textItem}>INTERESES</Text>
            <Text style={styles.numberItems}>14%</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.textItem}>CUOTAS</Text>
            <Text style={styles.numberItems}>12</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.textItem}>VALOR CUOTA</Text>
            <Text style={styles.numberItems}>$4500</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Atras"
          color="secondary"
          rounded="md"
          border="sm"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Solicitar"
          color="primary"
          rounded="md"
          onPress={() => navigation.navigate("Loader")}
        />
      </View>
    </View>
  );
};

export default CalculateScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(32),
    justifyContent: "space-between",
  },
  headerContainer: {
    gap: verticalScale(6),
  },
  title: {
    color: Colors.black,
    fontSize: moderateScale(24),
    fontWeight: "500",
  },
  subtitle: {
    color: Colors.black,
    fontWeight: "600",
    fontSize: moderateScale(14),
  },
  text: {
    color: Colors.lightGrey,
    fontSize: moderateScale(14),
    fontWeight: "400",
  },
  listItems: {
    gap: verticalScale(28),
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textItem: {
    fontSize: moderateScale(14),
    color: Colors.grey,
    fontWeight: "500",
  },
  numberItems: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    color: Colors.grey,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(16),
  },
});
