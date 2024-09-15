import React from "react";
import styled from "styled-components";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import Paragraph from "../../base components/TypographyComponents/Paragraph/Paragraph";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import { spacingMap } from "../../../utils/spacingMap";

interface TextWithMediaProps {
  variant: "ImageSmall" | "ImageLarge";
  headingText: string;
  paragraphText: string;
  imageUrl: string;
  paddingTopBottom?: keyof typeof spacingMap;
}

const PaddedContainer = styled.div<{
  paddingTopBottom: string;
}>`
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const renderers = {
  ImageSmall: ({
    headingText,
    paragraphText,
    imageUrl,
  }: Pick<
    TextWithMediaProps,
    "headingText" | "paragraphText" | "imageUrl"
  >) => (
    <Grid variant="variant4">
      <Stack direction="vertical" gap="SpacingSpacing2">
        <Heading level="h2" color="dark">
          {headingText}
        </Heading>
        <Paragraph align="left" color="dark">
          {paragraphText}
        </Paragraph>
      </Stack>
      <Image src={imageUrl} alt={headingText} />
    </Grid>
  ),

  ImageLarge: ({
    headingText,
    paragraphText,
    imageUrl,
  }: Pick<
    TextWithMediaProps,
    "headingText" | "paragraphText" | "imageUrl"
  >) => (
    <Grid variant="variant5">
      <Stack direction="vertical" gap="SpacingSpacing2">
        <Heading level="h2" color="dark">
          {headingText}
        </Heading>
        <Paragraph align="left" color="dark" textTransform="none">
          {paragraphText}
        </Paragraph>
      </Stack>
      <Image src={imageUrl} alt={headingText} />
    </Grid>
  ),
};

const TextWithMedia: React.FC<TextWithMediaProps> = (props) => {
  const {
    variant,
    paddingTopBottom = "SpacingSpacing2", // Default padding for top and bottom
  } = props;

  const paddingTopBottomValue = spacingMap[paddingTopBottom];
  const Renderer = renderers[variant];

  return Renderer ? (
    <PaddedContainer paddingTopBottom={paddingTopBottomValue}>
      {Renderer(props)}
    </PaddedContainer>
  ) : null;
};

export default TextWithMedia;
