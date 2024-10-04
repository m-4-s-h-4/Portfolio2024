import React from "react";
import styled from "styled-components";
import { spacingMap } from "../../../../../utils/spacingMap";
import Grid from "../../../../base components/LayoutComponents/Grid/Grid";

// Interface for the component props
export interface ImagesLayoutProps {
  style?: React.CSSProperties;
  src: string | string[]; // Single or multiple images
  alt?: string | string[]; // Single or multiple alt texts
  imageHeight?: string;
  paddingTopBottom?: keyof typeof spacingMap;
  paddingLeftRight?: keyof typeof spacingMap;
  variant?: "default" | "two-images"; // New variant prop
}

// Styled container for padding
const PaddedContainer = styled.div<{
  paddingTopBottom?: string;
  paddingLeftRight?: string;
}>`
  padding-top: ${(props) => props.paddingTopBottom || "0"};
  padding-bottom: ${(props) => props.paddingTopBottom || "0"};
  padding-left: ${(props) => props.paddingLeftRight || "0"};
  padding-right: ${(props) => props.paddingLeftRight || "0"};
`;

// Container for a full-width image
const FullWidthImage = styled.div<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  overflow: hidden;
`;

// Styled image component
const StyledImage = styled.img<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || "100%"};
  display: block;
  object-fit: cover;
  border-radius: 5px;
`;

const ImagesLayout: React.FC<ImagesLayoutProps> = ({
  style,
  src,
  alt = "", // Default to an empty string if alt is not provided
  imageHeight,
  paddingTopBottom = "SpacingSpacing0",
  paddingLeftRight = "SpacingSpacing0",
  variant = "default",
}) => {
  const paddingTopBottomValue = spacingMap[paddingTopBottom];
  const paddingLeftRightValue = spacingMap[paddingLeftRight];

  // Convert `src` and `alt` to arrays if they are not already
  const srcArray = Array.isArray(src) ? src : [src];
  const altArray = Array.isArray(alt) ? alt : [alt];

  return (
    <PaddedContainer
      paddingTopBottom={paddingTopBottomValue}
      paddingLeftRight={paddingLeftRightValue}
    >
      {/* Conditional Rendering Based on Variant */}
      {variant === "two-images" && srcArray.length >= 2 ? (
        <Grid variant="Equal2">
          <FullWidthImage style={style} height={imageHeight}>
            <StyledImage
              src={srcArray[0]}
              alt={altArray[0] || "Image 1"}
              height={imageHeight}
            />
          </FullWidthImage>
          <FullWidthImage style={style} height={imageHeight}>
            <StyledImage
              src={srcArray[1]}
              alt={altArray[1] || "Image 2"}
              height={imageHeight}
            />
          </FullWidthImage>
        </Grid>
      ) : (
        <FullWidthImage style={style} height={imageHeight}>
          <StyledImage
            src={srcArray[0]}
            alt={altArray[0] || "Default Image"}
            height={imageHeight}
          />
        </FullWidthImage>
      )}
    </PaddedContainer>
  );
};

export default ImagesLayout;
