import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/screens/SignUpScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TypeAccountScreen from "./src/screens/TypeAccountScreen";
import FormScreen from "./src/screens/FormScreen";
import LoaderScreen from "./src/screens/LoaderScreen";
import SuccessScreen from "./src/screens/SuccessScreen";
import SignInScreen from "./src/screens/SignInScreen";
import HomeScreen from "./src/screens/HomeScreen";
import NewCreditScreen from "./src/screens/NewCreditScreen";
import CalculateScreen from "./src/screens/CalculateScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="TypeAccount" component={TypeAccountScreen} />
          <Stack.Screen name="Form" component={FormScreen} />
          <Stack.Screen name="Loader" component={LoaderScreen} />
          <Stack.Screen name="Success" component={SuccessScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewCredit" component={NewCreditScreen} />
          <Stack.Screen name="Calculate" component={CalculateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
