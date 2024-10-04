import React from "react";
import styled from "styled-components";
import Grid from "../../../../base components/LayoutComponents/Grid/Grid";
import Paragraph from "../../../../base components/TypographyComponents/Paragraph/Paragraph";
import Heading from "../../../../base components/TypographyComponents/Heading/Heading";
import Stack from "../../../../base components/LayoutComponents/Stack/Stack";
import Flex from "../../../../base components/LayoutComponents/Flex/Flex";
import { spacingMap } from "../../../../../utils/spacingMap";
import ImagesLayout from "../../media components/ImagesLayout/ImagesLayout";
import Divider from "../../../../base components/Divider/Divider";

// Interface for the props
interface TextLayoutProps {
  aboutProjectParagraph?: string; // Paragraph for "About the project"
  paragraphs: string[]; // Array of paragraphs corresponding to "Time", "Role", "Tools"
  imageSrc: string; // URL of the image to display
  imageAlt?: string; // Alt text for the image
  imageHeight?: string; // Optional height of the image
  paddingTopBottom?: keyof typeof spacingMap; // Optional padding value
}

// Styled container for padding
const PaddedContainer = styled.div<{
  paddingTopBottom: string;
}>`
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
`;

// Static headings array for the "Time", "Role", "Tools"
const secondaryHeadings = ["Time", "Role", "Tools"];

const IntroLayout: React.FC<TextLayoutProps> = ({
  aboutProjectParagraph = "Default paragraph for About the project", // Default value if not provided
  paragraphs = [],
  imageSrc,
  imageAlt = "Project Image", // Default alt text if not provided
  imageHeight, // Optional image height
  paddingTopBottom = "SpacingSpacing2",
}) => {
  const paddingTopBottomValue = spacingMap[paddingTopBottom];

  return (
    <>
      {/* ImagesLayout Component with Dynamic Props */}
      <ImagesLayout
        src={imageSrc}
        alt={imageAlt}
        imageHeight={imageHeight || "70vh"} // Default height of 60vh if not specified
      />

      {/* Main Content Container */}
      <PaddedContainer paddingTopBottom={paddingTopBottomValue}>
        <Grid variant="ColumnSL">
          {/* About the Project Section */}
          <Stack direction="vertical" gap="SpacingSpacing3">
            <Heading level="h4" color="dark">
              About the project
            </Heading>
            <Paragraph align="left" color="dark">
              {aboutProjectParagraph}
            </Paragraph>
          </Stack>

          {/* Time, Role, and Tools in a Row Layout with Equal Widths */}
          <Flex direction="row" gap="SpacingSpacing2">
            {secondaryHeadings.map((heading, index) => (
              <Flex
                key={index}
                direction="column"
                yAlign="center"
                gap="SpacingSpacing1"
              >
                <Heading level="h4" color="dark">
                  {heading}
                </Heading>
                <Paragraph align="center" color="dark">
                  {paragraphs[index] || "Default Paragraph Text"}
                </Paragraph>
              </Flex>
            ))}
          </Flex>
        </Grid>
      </PaddedContainer>
      <Divider />
    </>
  );
};

export default IntroLayout;
