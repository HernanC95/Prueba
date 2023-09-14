import { horizontalScale, moderateScale, verticalScale } from "../../utils";

const getTypeInput = (type: string | undefined) => {
  switch (type) {
    case "numeric":
      return "numeric";
    case "text":
      return "text";
    case "email":
      return "email";
    default:
      return "text";
  }
};

const getSizeInput = (size: string | undefined) => {
  switch (size) {
    case "sm":
      return {
        paddingVertical: verticalScale(8),
        paddingHorizontal: horizontalScale(12),
        fontSize: moderateScale(12),
      };
    case "md":
      return {
        paddingVertical: verticalScale(12),
        paddingHorizontal: horizontalScale(16),
        fontSize: moderateScale(14),
      };
    case "lg":
      return {
        paddingVertical: verticalScale(16),
        paddingHorizontal: horizontalScale(20),
        fontSize: moderateScale(16),
      };
    default:
      return {
        paddingHorizontal: horizontalScale(20),
      };
  }
};

const getSizeLabel = (size: string | undefined) => {
  switch (size) {
    case "sm":
      return {
        fontSize: moderateScale(12),
        marginTop: verticalScale(14),
        marginLeft: horizontalScale(12),
      };
    case "md":
      return {
        fontSize: moderateScale(14),
        marginTop: verticalScale(16),
        marginLeft: horizontalScale(12),
      };
    case "lg":
      return {
        fontSize: moderateScale(16),
        marginTop: verticalScale(18),
        marginLeft: horizontalScale(12),
      };
    default:
      return {
        marginLeft: horizontalScale(12),
        marginTop: verticalScale(6),
      };
  }
};

export { getSizeInput, getSizeLabel, getTypeInput };
