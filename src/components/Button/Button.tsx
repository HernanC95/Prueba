import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  verticalScale,
  moderateScale,
  getBorderRadius,
  horizontalScale,
} from "../../utils";
import { IButtonProps } from "../../interfaces";
import {
  getBorderColor,
  getBorderSize,
  getButtonColor,
  getTitleColor,
  getSize,
} from "./utils";

const Button: React.FC<IButtonProps> = ({
  border,
  color,
  rounded,
  title,
  size,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: getButtonColor(color),
          borderWidth: getBorderSize(border),
          borderColor: getBorderColor(color),
          borderRadius: moderateScale(getBorderRadius(rounded)),
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          gap: moderateScale(10),
          alignItems: "center",
        }}
      >
        {icon}
        <Text
          style={{
            color: getTitleColor(color),
            fontSize: moderateScale(getSize(size)),
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: verticalScale(14),
    paddingHorizontal: horizontalScale(24),
  },
});
