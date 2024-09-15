import React from "react";

import Container from "../../components/base components/Container/Container";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Grid from "../../components/base components/LayoutComponents/Grid/Grid";
import Box from "../../components/base components/Primatives/Box/Box";
import HyperText from "../../components/about components/Services/HyperText";

const Footer: React.FC = () => {
  return (
    <Container backgroundColor="dark" height="auto">
      <Grid variant="Equal3">
        <Box
          borderColor="rgba(255, 255, 255, 0.5)"
          borderBottom
          borderRight
          paddingTop="SpacingSpacing1"
          paddingBottom="SpacingSpacing1"
        >
          <HyperText
            text={"Linkedin"}
            duration={800}
            level="h4"
            color="light"
            align="center"
            className="centered-heading"
          />
        </Box>
        <Box
          borderColor="rgba(255, 255, 255, 0.5)"
          borderBottom
          borderLeft
          borderRight
          paddingTop="SpacingSpacing1"
          paddingBottom="SpacingSpacing1"
        >
          <HyperText
            text={"Email"}
            duration={800}
            level="h4"
            color="light"
            align="center"
            className="centered-heading"
          />
        </Box>
        <Box
          borderColor="rgba(255, 255, 255, 0.5)"
          borderBottom
          borderLeft
          paddingTop="SpacingSpacing1"
          paddingBottom="SpacingSpacing1"
        >
          <HyperText
            text={"Whatsapp"}
            duration={800}
            level="h4"
            color="light"
            align="center"
            className="centered-heading"
          />
        </Box>
      </Grid>
      <Heading
        level={"display"}
        color="light"
        align="center"
        paddingTop="SpacingSpacing2"
        paddingBottom="SpacingSpacing4"
      >
        Contact me
      </Heading>
    </Container>
  );
};

export default Footer;
