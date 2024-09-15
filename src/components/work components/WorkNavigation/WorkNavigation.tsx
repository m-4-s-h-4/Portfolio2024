import React from "react";

import Box from "../../base components/Primatives/Box/Box";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import Category from "../Category/Category";
import Button from "../../base components/Button/Button";
import Container from "../../base components/Container/Container";

interface WorkNavigationProps {
  onSelectCategory: (category: string | null) => void;
}

const WorkNavigation: React.FC<WorkNavigationProps> = ({
  onSelectCategory,
}) => {
  return (
    <Container>
      <Box style={{ position: "sticky", top: 0 }}>
        <Stack gap="SpacingSpacing2">
          <Heading
            level="h1"
            color="dark"
            paddingLeft="SpacingSpacing4"
            paddingTop="SpacingSpacing4"
          >
            work
          </Heading>

          <Box paddingRight="SpacingSpacing4" paddingLeft="SpacingSpacing4">
            <Category onSelectCategory={onSelectCategory} />
          </Box>
          <Box paddingRight="SpacingSpacing4" paddingLeft="SpacingSpacing4">
            <Button text={"See All ↝"} link="/work" />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default WorkNavigation;
