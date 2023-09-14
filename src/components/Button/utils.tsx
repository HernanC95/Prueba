import { Colors } from "../../constants";

const getSize = (size: string | undefined) => {
  switch (size) {
    case "xs":
      return 8;
    case "sm":
      return 12;
    case "md":
      return 16;
    case "lg":
      return 20;
    case "xl":
      return 24;
    default:
      return 14;
  }
};

const getTitleColor = (color: string | undefined) => {
  switch (color) {
    case "primary":
      return Colors.white;
    case "secondary":
      return Colors.green;
    default:
      return Colors.black;
  }
};

const getButtonColor = (color: string | undefined) => {
  switch (color) {
    case "primary":
      return Colors.green;
    case "secondary":
      return Colors.white;
    default:
      return Colors.white;
  }
};

const getBorderColor = (borderColor: string | undefined) => {
  switch (borderColor) {
    case "primary":
      return Colors.white;
    case "secondary":
      return Colors.green;
    default:
      return Colors.lightGrey;
  }
};

const getBorderSize = (borderSize: string | undefined) => {
  switch (borderSize) {
    case "sm":
      return 1;
    case "md":
      return 2;
    case "lg":
      return 3;
    case "xl":
      return 4;
    default:
      return 0;
  }
};

export {
  getBorderColor,
  getBorderSize,
  getButtonColor,
  getTitleColor,
  getSize,
};
