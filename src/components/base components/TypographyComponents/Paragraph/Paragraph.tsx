import React from "react";
import Text from "../../Primatives/Text/Text";
import { TextColorDark, TextColorLight } from "../../../../tokens/js/variables";
import { spacingMap } from "../../../../utils/spacingMap";

type ParagraphAlignment = "left" | "center";
type TextTransform = "none" | "uppercase";

export interface ParagraphProps {
  align?: ParagraphAlignment;
  color?: "dark" | "light";
  paddingTop?: keyof typeof spacingMap;
  paddingBottom?: keyof typeof spacingMap;
  textTransform?: TextTransform;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const colorMap = {
  dark: TextColorDark,
  light: TextColorLight,
};

const Paragraph: React.FC<ParagraphProps> = ({
  align = "left",
  color = "dark",
  paddingTop = "SpacingSpacing0",
  paddingBottom = "SpacingSpacing0",
  textTransform = "none",
  style,
  children,
}) => {
  const textColor = colorMap[color];
  const textAlign = align === "center" ? "center" : "left";
  const paddingTopValue = spacingMap[paddingTop];
  const paddingBottomValue = spacingMap[paddingBottom];

  return (
    <Text
      as="body"
      style={{
        color: textColor,
        textAlign,
        paddingTop: paddingTopValue,
        paddingBottom: paddingBottomValue,
        textTransform,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
