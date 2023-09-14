export interface ICardProps {
  title: string;
  subTitle?: string;
  icon?: any;
  rounded?: "sm" | "md" | "lg" | "full";
  direction: "row" | "column";
}
