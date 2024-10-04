import React from "react";
import styled from "styled-components";
import {
  BackgroundColorDark,
  BackgroundColorLight,
} from "../../../tokens/js/variables";
import Box from "../../base components/Primatives/Box/Box";
import Flex from "../../base components/LayoutComponents/Flex/Flex";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import Button from "../../base components/Button/Button";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import Paragraph from "../../base components/TypographyComponents/Paragraph/Paragraph";
import Category from "../Category/Category";

export const StackList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
`;

export const StackItem = styled.li`
  background-color: ${BackgroundColorLight};
  position: sticky;
  top: var(--space-sm, 0.75em);
  transform-origin: center top;
  transition: transform 0.3s ease-out;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  height: auto;
  padding: 1rem;
  border-top: 0.5px solid rgba(0, 0, 0, 0.3);
`;

export const FullHeightStackItem1 = styled(StackItem)`
  height: 50vh;
  grid-template-columns: 1fr;
  position: sticky;
  border: none;
  background-color: transparent;

  & > h1 {
    position: absolute;
    bottom: -2vh;
    right: 2vw;
  }
`;

export const FullHeightStackItem = styled(StackItem)`
  height: 100vh;
  grid-template-columns: 1fr;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${BackgroundColorDark};
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ThumbnailBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface Work {
  id: string;
  title: string;
  description: string;
  category: { name: string };
  thumbnail: { url: string };
}

interface StackItemContentProps {
  work: Work;
}

const StackItemContent: React.FC<StackItemContentProps> = ({ work }) => {
  return (
    <>
      <ThumbnailBox>
        <Thumbnail src={work.thumbnail.url} alt={work.title} />
      </ThumbnailBox>

      <Box paddingLeft="SpacingSpacing2" paddingRight="SpacingSpacing2">
        <Flex direction="column" xAlign="space-between" yAlign="flex-end">
          <Category name={work.category.name} />
          <Stack gap="SpacingSpacing2">
            <Heading level={"h2"}>{work.title}</Heading>
            <Paragraph>{work.description}</Paragraph>
            <Button text={"Explore"} link={`/work/${work.id}`} />
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default StackItemContent;
