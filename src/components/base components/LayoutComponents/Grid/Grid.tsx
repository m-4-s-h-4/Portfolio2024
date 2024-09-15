import React from "react";
import styled from "styled-components";
import { spacingMap } from "../../../../utils/spacingMap";
import Box from "../../Primatives/Box/Box";

export interface GridProps {
  variant?: "Equal3" | "ColumnSL" | "Equal2" | "WorkDisplay";
  style?: React.CSSProperties;
  children: React.ReactNode;
  gridHeight?: string;
  gap?: keyof typeof spacingMap;
}

const GridContainer = styled(Box)<{
  variant: GridProps["variant"];
  gridHeight?: string;
  gap: keyof typeof spacingMap;
}>`
  display: grid;
  width: 100%;
  height: ${(props) => props.gridHeight || "auto"};
  grid-template-columns: ${(props) =>
    props.variant === "Equal3"
      ? "repeat(3, 1fr)"
      : props.variant === "Equal2"
        ? "repeat(2, 1fr)"
        : props.variant === "ColumnSL"
          ? "1fr 2fr"
          : props.variant === "WorkDisplay"
            ? "1fr 2fr"
            : "1fr"};
  grid-template-rows: ${(props) =>
    props.variant === "WorkDisplay" ? "auto" : "1fr"};
  height: ${(props) => (props.variant === "WorkDisplay" ? "100%" : "auto")};
  grid-auto-flow: ${(props) =>
    props.variant === "WorkDisplay" ? "row" : "initial"};
  grid-gap: ${(props) => spacingMap[props.gap]};
  overflow-y: ${(props) =>
    props.variant === "WorkDisplay" ? "auto" : "hidden"};

  /* Responsive layout for WorkDisplay on smaller screens */
  @media (max-width: 1265px) {
    ${(props) =>
      props.variant === "WorkDisplay" &&
      `
          grid-template-columns: 1fr; /* One column layout */
          grid-template-rows: auto auto; /* Two rows layout */
          
          & > :first-child {
            grid-column: span 2; /* Span across both columns in row 1 */
            position: sticky;
            top: 0; /* Adjust as needed for your design */
            z-index: 10; /* Ensures it stays above other elements if necessary */
          }
    
          & > :nth-child(2),
          & > :nth-child(3) {
            grid-column: auto; /* Each takes one column in row 2 */
          }
        `}
  }
`;

const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
  variant = "Equal3",
  style,
  children,
  gridHeight,
  gap = "SpacingSpacing0",
}) => {
  return (
    <GridContainer
      variant={variant}
      style={style}
      gridHeight={gridHeight}
      gap={gap}
    >
      {children} {/* Each child will now be treated as a separate grid item */}
    </GridContainer>
  );
};

export default Grid;
