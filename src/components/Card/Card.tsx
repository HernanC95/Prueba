import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants";
import { getBorderRadius, moderateScale } from "../../utils";
import { Pressable } from "react-native";
import RightArrow from "../../assets/rightArrow.svg";
import { ICardProps } from "../../interfaces";

const Card: React.FC<ICardProps> = ({
  title,
  subTitle,
  icon,
  rounded,
  direction,
}) => {
  const [borderCard, setborderCard] = useState<any>({});
  return (
    <View
      style={[
        styles.mainContainer,
        borderCard,

        {
          borderRadius: moderateScale(getBorderRadius(rounded)),
        },
      ]}
    >
      <Pressable>
        <View
          style={{
            flexDirection: direction,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: direction,
              gap:
                direction === "column" ? moderateScale(12) : moderateScale(28),
              alignItems: "center",
            }}
          >
            {icon}
            <View
              style={{
                alignItems: direction === "column" ? "center" : "flex-start",
              }}
            >
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subTitle}</Text>
            </View>
          </View>
          {direction === "row" && <RightArrow />}
        </View>
      </Pressable>
    </View>
  );
};
export default Card
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: moderateScale(1),
    borderColor: Colors.lightGrey,
    padding: moderateScale(20),
  },
  title: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: "600",
  },
  subtitle: {
    color: Colors.grey,
    fontWeight: "400",
  },
});
