import { StyleSheet, Text, View } from "react-native";
import { useRef, useState } from "react";
import { TextInput } from "react-native";
import { Colors } from "../../constants";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
  getBorderRadius,
} from "../../utils";
import { IInputProps } from "../../interfaces";
import { getSizeInput, getSizeLabel, getTypeInput } from "./utils";

const Input: React.FC<IInputProps> = ({ label, type, size, rounded }) => {
  const [labelStyle, setlabelStyle] = useState({});
  const [valueInput, setValueInput] = useState("");
  const refInput: any = useRef(null);

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          getSizeInput(size),
          { borderRadius: getBorderRadius(rounded) },
        ]}
        onChangeText={(text) => setValueInput(text)}
        value={valueInput}
        ref={refInput}
        onFocus={() =>
          setlabelStyle({
            marginTop: verticalScale(-10),
            marginLeft: horizontalScale(20),
          })
        }
        onEndEditing={() => {
          valueInput.length === 0 && setlabelStyle(getSizeLabel(size));
        }}
        inputMode={getTypeInput(type)}
      />
      <Text
        style={[styles.textInput, getSizeLabel(size), labelStyle]}
        onPress={() => refInput?.current?.focus()}
      >
        {label}
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: moderateScale(1),
    borderColor: Colors.lightGrey,
    fontWeight: "500",
  },
  textInput: {
    color: Colors.grey,
    position: "absolute",
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(6),
  },
});
