import React from "react";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Container from "../../components/base components/Container/Container";
import Grid from "../../components/base components/LayoutComponents/Grid/Grid";
import Service from "../../components/about components/Services/Services";
import ImagesLayout from "../../components/media components/ImagesLayout/ImagesLayout";

const About: React.FC = () => {
  return (
    <Container height="auto" direction="column">
      <Grid variant="ColumnSL">
        <Heading
          level={"h1"}
          paddingLeft="SpacingSpacing4"
          paddingTop="SpacingSpacing2"
        >
          About me
        </Heading>

        <ImagesLayout fullWidthHeight="40vh" paddingTopBottom="SpacingSpacing0">
          <img
            src="https://stormtrotters.com/wp-content/uploads/2021/02/16-9-tropicfeel-web-jungle-features-sustainable-01.jpg?w=1024"
            alt="Full Width Final Animation"
          />
        </ImagesLayout>
      </Grid>
      <Service />
    </Container>
  );
};

export default About;
