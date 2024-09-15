import React from "react";

import Container from "../../components/base components/Container/Container";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import FooterLinks from "../../components/footer components/FooterLinks/FooterLinks";

const Footer: React.FC = () => {
  return (
    <Container backgroundColor="dark" height="auto">
      <FooterLinks />
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
