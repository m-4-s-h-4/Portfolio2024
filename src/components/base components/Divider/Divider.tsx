import React from "react";
import { spacingMap } from "../../../utils/spacingMap";
import { TextColorDark } from "../../../tokens/js/variables";

export interface DividerProps {
  paddingTopBottom?: keyof typeof spacingMap;
  paddingLeftRight?: keyof typeof spacingMap;
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({
  paddingTopBottom = "SpacingSpacing0",
  paddingLeftRight = "SpacingSpacing0",
  style,
}) => {
  const paddingTopBottomValue = spacingMap[paddingTopBottom];
  const paddingLeftRightValue = spacingMap[paddingLeftRight];

  return (
    <hr
      style={{
        border: `0.5px solid ${TextColorDark}`,
        marginTop: paddingTopBottomValue,
        marginBottom: paddingTopBottomValue,
        marginLeft: paddingLeftRightValue,
        marginRight: paddingLeftRightValue,
        ...style,
      }}
    />
  );
};

export default Divider;
