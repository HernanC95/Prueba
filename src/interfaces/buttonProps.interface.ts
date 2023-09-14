export interface IButtonProps {
  border?: "sm" | "md" | "lg" | "xl";
  borderColor?: "primary" | "secondary";
  color?: "primary" | "secondary";
  rounded?: "sm" | "md" | "lg" | "full";
  title?: string;
  titleColor?: "primary" | "secondary";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onPress?: () => void;
  icon?: any;
}
