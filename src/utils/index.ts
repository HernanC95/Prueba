import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const getBorderRadius = (borderRadius: string | undefined) => {
  switch (borderRadius) {
    case "sm":
      return 4;
    case "md":
      return 12;
    case "lg":
      return 20;
    case "full":
      return 100;
    default:
      return 0;
  }
};

export { horizontalScale, verticalScale, moderateScale, getBorderRadius};
