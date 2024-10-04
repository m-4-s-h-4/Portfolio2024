import React from "react";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import TwoParagraphs from "../layout styles/text layout components/TwoParagraphs/TwoParagraphs";
import Container from "../../base components/Container/Container";
import ImagesLayout from "../layout styles/media components/ImagesLayout/ImagesLayout";

const WorkDetails: React.FC = () => {
  return (
    <Container paddingTopBottom="SpacingSpacing3">
      <Grid variant="ColumnSL">
        <Heading level={"h4"}>Background & Current Challenges</Heading>
        <Stack gap="SpacingSpacing3">
          <TwoParagraphs
            text1="Select a brand from your country that has either gone out of business or whose products, services, and communications are not performing well and require a brand refresh. "
            text2="Select a brand from your country that has either gone out of business or whose products, services, and communications are not performing well and require a brand refresh. "
          />

          <ImagesLayout
            src="https://via.placeholder.com/1200x600"
            alt="Single Image"
            imageHeight="50vh"
          />
          <ImagesLayout
            src={[
              "https://via.placeholder.com/600x600",
              "https://via.placeholder.com/600x600",
            ]}
            alt={["First Image", "Second Image"]}
            imageHeight="40vh"
            variant="two-images"
          />
        </Stack>
      </Grid>
    </Container>
  );
};

export default WorkDetails;
