import React from "react";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Container from "../../components/base components/Container/Container";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import Stack from "../../components/base components/LayoutComponents/Stack/Stack";

const Landing: React.FC = () => {
  return (
    <Container height="100vh" backgroundColor="transparent">
      <Flex xAlign="center" yAlign="center" direction="column">
        <Stack gap="SpacingSpacing10">
          <Heading level="h3">Hello, my name is...</Heading>
          <Heading level="display">Masha</Heading>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Landing;
