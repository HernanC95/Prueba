import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants";
import { horizontalScale, moderateScale, verticalScale } from "../utils";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Profile from "../assets/profile.svg";
import Company from "../assets/companyLogo.svg";

const TypeAccountScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.mainContainer,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Elige tu tipo de perfil</Text>
        <Text style={styles.subTitle}>
          Selecciona si la cuenta es personal o para tu empresa
        </Text>
      </View>
      <View style={styles.cardsButton}>
        <View style={styles.cards}>
          <Card
            title="Personal"
            subTitle="Individual"
            icon={<Profile />}
            rounded="md"
            direction="row"
          />
          <Card
            title="Empresa"
            subTitle="Lorem ipsum dolor sit amet ."
            icon={<Company />}
            rounded="md"
            direction="row"
          />
        </View>

        <View>
          <Button
            color="primary"
            border="md"
            title="Comenzar"
            rounded="md"
            onPress={() => navigation.navigate("Form")}
          />
        </View>
      </View>
    </View>
  );
};

export default TypeAccountScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(32),
    backgroundColor: Colors.white,
    gap: verticalScale(90),
  },
  titleContainer: {
    gap: 10,
    marginTop: verticalScale(40),
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: "500",
  },
  subTitle: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    color: Colors.grey,
  },
  cardsButton: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: verticalScale(14),
  },
  cards: {
    gap: verticalScale(28),
  },
});
