import React from "react";
import styled from "styled-components";
import { spacingMap } from "../../../../utils/spacingMap";
import Box from "../../Primatives/Box/Box";

// Define interface for Grid component props
export interface GridProps {
  variant?: "Default" | "ColumnSL" | "Equal2"; // Variant prop to control grid configuration
  style?: React.CSSProperties;
  children: React.ReactNode;
  gridHeight?: string;
  gap?: keyof typeof spacingMap;
}

// Styled component for the Grid container with dynamic columns
const GridContainer = styled(Box)<{
  gridHeight?: string;
  gap: keyof typeof spacingMap;
  variant: GridProps["variant"];
}>`
  display: grid;
  width: 100%;
  height: ${(props) => props.gridHeight || "auto"};
  grid-template-columns: ${(props) =>
    props.variant === "ColumnSL"
      ? "repeat(6, 1fr)"
      : props.variant === "Equal2"
        ? "repeat(6, 1fr)" // 6 columns, split into 3+3
        : "repeat(3, 1fr)"}; // 3 equal columns for Default
  grid-gap: ${(props) => spacingMap[props.gap]};
  overflow-y: hidden;

  /* Modify the grid column span based on the variant */
  & > :nth-child(1) {
    grid-column: ${(props) =>
      props.variant === "ColumnSL"
        ? "span 2"
        : props.variant === "Equal2"
          ? "span 3"
          : "auto"}; // 2 columns for ColumnSL, 3 columns for Equal2, 1 for Default
  }

  & > :nth-child(2) {
    grid-column: ${(props) =>
      props.variant === "ColumnSL"
        ? "span 4"
        : props.variant === "Equal2"
          ? "span 3"
          : "auto"}; // 4 columns for ColumnSL, 3 columns for Equal2, 1 for Default
  }
`;

// Grid component with variant support
const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
  variant = "Default", // Default variant uses 3 equal columns
  style,
  children,
  gridHeight,
  gap = "SpacingSpacing2",
}) => {
  return (
    <GridContainer
      style={style}
      gridHeight={gridHeight}
      gap={gap}
      variant={variant}
    >
      {children}
    </GridContainer>
  );
};

export default Grid;
