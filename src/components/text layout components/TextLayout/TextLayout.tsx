import React from "react";
import styled from "styled-components";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import Paragraph from "../../base components/TypographyComponents/Paragraph/Paragraph";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import { spacingMap } from "../../../utils/spacingMap";

interface TextLayoutProps {
  variant:
    | "HeadingLParagraphR"
    | "ThreeParagraph"
    | "HeadingWithThreeParagraph";
  headingText?: string;
  paragraphText?: string;
  paragraphs?: string[];
  headings?: string[];
  paddingTopBottom?: keyof typeof spacingMap;
  alignItems?: "flex-start" | "center" | "baseline" | "flex-end";
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
}

const PaddedContainer = styled.div<{
  paddingTopBottom: string;
}>`
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
`;

const renderers = {
  HeadingLParagraphR: ({
    headingText,
    paragraphText,
    alignItems = "flex-start",
    textTransform = "none",
  }: Pick<
    TextLayoutProps,
    "headingText" | "paragraphText" | "alignItems" | "textTransform"
  >) => (
    <Grid variant="variant4" style={{ alignItems }}>
      <Heading level="h2" color="dark">
        {headingText}
      </Heading>
      <Paragraph align="left" color="dark" style={{ textTransform }}>
        {paragraphText}
      </Paragraph>
    </Grid>
  ),

  ThreeParagraph: ({
    paragraphs,
    alignItems = "flex-start",
    textTransform = "none",
  }: Pick<TextLayoutProps, "paragraphs" | "alignItems" | "textTransform">) => (
    <Grid variant="variant2" style={{ alignItems }}>
      {paragraphs?.map((text, index) => (
        <Paragraph
          key={index}
          align="left"
          color="dark"
          style={{ textTransform }}
        >
          {text}
        </Paragraph>
      ))}
    </Grid>
  ),

  HeadingWithThreeParagraph: ({
    headings,
    paragraphs,
    alignItems = "flex-start",
    textTransform = "none",
  }: Pick<
    TextLayoutProps,
    "headings" | "paragraphs" | "alignItems" | "textTransform"
  >) => (
    <Grid variant="variant2" style={{ alignItems }}>
      {paragraphs?.map((text, index) => (
        <Stack key={index} direction="vertical" gap="SpacingSpacing2">
          <Heading level="h2" color="dark">
            {headings?.[index] || `Heading ${index + 1}`}
          </Heading>
          <Paragraph align="left" color="dark" style={{ textTransform }}>
            {text}
          </Paragraph>
        </Stack>
      ))}
    </Grid>
  ),
};

const TextLayout: React.FC<TextLayoutProps> = (props) => {
  const {
    variant,
    paddingTopBottom = "SpacingSpacing2", // Default padding for top and bottom
    alignItems = "flex-start", // Default alignment
    textTransform = "none", // Default text-transform
  } = props;

  const paddingTopBottomValue = spacingMap[paddingTopBottom];
  const Renderer = renderers[variant];

  return Renderer ? (
    <PaddedContainer paddingTopBottom={paddingTopBottomValue}>
      {Renderer({ ...props, alignItems, textTransform })}
    </PaddedContainer>
  ) : null;
};

export default TextLayout;
