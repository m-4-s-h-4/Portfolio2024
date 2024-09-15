import Box from "../../base components/Primatives/Box/Box";

import Grid from "../../base components/LayoutComponents/Grid/Grid";
import HyperText from "../../hyper text/HyperText";

const FooterLinks = () => {
  return (
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
  );
};

export default FooterLinks;
