import React from "react";
import styled from "styled-components";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import Box from "../../base components/Primatives/Box/Box";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import Paragraph from "../../base components/TypographyComponents/Paragraph/Paragraph";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import { BackgroundColorProjectHoover } from "../../../tokens/js/variables";

const Thumbnail = styled.img`
  width: 100%;
  height: 40vh;
  cursor: pointer;
`;

const ScrollableGrid = styled(Grid)`
  overflow-y: auto;
  height: 100%;
`;

const HoverableBox = styled(Box)`
  transition: background-color 0.3s ease;
  cursor: pointer; // Ensures cursor changes to pointer when hovering over the entire box
  &:hover {
    background-color: ${BackgroundColorProjectHoover};
  }
`;

interface WorkDisplayProps {
  filteredWorks: Array<{
    id: string;
    thumbnail: { url: string };
    title: string;
  }>;
  onProjectClick: (id: string) => void;
}

const WorkDisplay: React.FC<WorkDisplayProps> = ({
  filteredWorks,
  onProjectClick,
}) => {
  return (
    <ScrollableGrid variant="Equal2" gap="SpacingSpacing0">
      {filteredWorks.map((work) => (
        <HoverableBox
          borderLeft
          borderBottom
          paddingBottom="SpacingSpacing4"
          paddingTop="SpacingSpacing4"
          paddingLeft="SpacingSpacing4"
          paddingRight="SpacingSpacing4"
          key={work.id}
          onClick={() => onProjectClick(work.id)} // Handles click on the entire box
        >
          <Stack gap="SpacingSpacing2">
            <Thumbnail src={work.thumbnail.url} alt={work.title} />
            <Stack gap="SpacingSpacing1">
              <Heading level={"h3"} paddingRight="SpacingSpacing8">
                {work.title}
              </Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem.
              </Paragraph>
            </Stack>
          </Stack>
        </HoverableBox>
      ))}
    </ScrollableGrid>
  );
};

export default WorkDisplay;
