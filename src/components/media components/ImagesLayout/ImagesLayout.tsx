import React from "react";
import styled from "styled-components";
import Box from "../../base components/Primatives/Box/Box";
import { spacingMap } from "../../../utils/spacingMap";

export interface ImagesLayoutProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  paddingTopBottom?: keyof typeof spacingMap;
  imageHeight?: string;
  fullWidthHeight?: string;
}

const PaddedContainer = styled.div<{ paddingTopBottom: string }>`
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
`;

const StyledImage = styled.img<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  display: block;
  object-fit: cover;
  border-radius: 0;
`;

const FullWidthImage = styled(Box)<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || "100%"};
`;

const renderChildrenWithDynamicHeight = (
  children: React.ReactNode,
  height?: string
) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === "img") {
      return (
        <StyledImage
          src={child.props.src}
          alt={child.props.alt}
          height={height}
        />
      );
    }
    return child;
  });
};

const ImagesLayout: React.FC<ImagesLayoutProps> = ({
  style,
  children,
  paddingTopBottom = "SpacingSpacing2",
  imageHeight,
  fullWidthHeight,
}) => {
  const paddingTopBottomValue = spacingMap[paddingTopBottom];

  const heightToApply = fullWidthHeight || imageHeight;

  return (
    <PaddedContainer paddingTopBottom={paddingTopBottomValue}>
      <FullWidthImage style={style} height={heightToApply}>
        {renderChildrenWithDynamicHeight(children, heightToApply)}
      </FullWidthImage>
    </PaddedContainer>
  );
};

export default ImagesLayout;
