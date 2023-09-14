import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants";
import SelectDropdown from "react-native-select-dropdown";
import { getBorderRadius, moderateScale } from "../../utils";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { IDropdownProps } from "../../interfaces";

const Dropdown: React.FC<IDropdownProps> = ({ label, options, rounded }) => {
  const [colorText, setcolorText] = useState({});

  return (
    <SelectDropdown
      data={options}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
        setcolorText({ color: Colors.black, fontWeight: "500" });
      }}
      defaultButtonText={label}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      buttonStyle={[
        styles.dropdownBtnStyle,
        { borderRadius: getBorderRadius(rounded) },
      ]}
      buttonTextStyle={[styles.dropdownBtnTxtStyle, colorText]}
      renderDropdownIcon={(isOpened) => {
        return (
          <FontAwesome
            name={isOpened ? "chevron-up" : "chevron-down"}
            color={Colors.grey}
            size={moderateScale(14)}
          />
        );
      }}
      dropdownIconPosition={"right"}
      dropdownStyle={styles.dropdownDropdownStyle}
      rowStyle={styles.dropdownRowStyle}
      rowTextStyle={styles.dropdownRowTxtStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdownBtnStyle: {
    borderWidth: moderateScale(1),
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.white,
    width: "100%",
  },
  dropdownBtnTxtStyle: {
    color: Colors.grey,
    textAlign: "left",
    fontSize: moderateScale(14),
  },
  dropdownDropdownStyle: {
    backgroundColor: "#444",
    borderBottomLeftRadius: moderateScale(12),
    borderBottomRightRadius: moderateScale(12),
  },
  dropdownRowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdownRowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Dropdown;
