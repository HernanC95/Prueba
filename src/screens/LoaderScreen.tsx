import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
const LoaderScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Success");
    }, 2000);
  });

  return (
    <View style={styles.mainContainer}>
      <ActivityIndicator size="large" color="#DBDBDB" />
      <Text>Estamos evaluando tu solicitud</Text>
    </View>
  );
};

export default LoaderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
