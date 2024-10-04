import React from "react";
import Container from "../../components/base components/Container/Container";
import WorkDetails from "../../components/work details components/WorkDetails/WorkDetails";
import IntroLayout from "../../components/work details components/layout styles/text layout components/IntroLayout/IntroLayout";

const WorkPage: React.FC = () => {
  return (
    <Container
      height="auto"
      paddingLeftRight="SpacingSpacing4"
      paddingTopBottom="SpacingSpacing2"
    >
      <IntroLayout
        imageSrc="https://cdn.dribbble.com/users/5031392/screenshots/15003232/media/68c89474a00683bfafa70c819c56e26c.png"
        imageAlt="New Header Image for Different Project"
        paragraphs={[
          "12 weeks",
          "Visual Designer & Art Director",
          "Adobe Illustrator, Photoshop, Figma",
        ]}
        aboutProjectParagraph="Select a brand from your country that has either gone out of business or whose products, services, and communications are not performing well and require a brand refresh. In the first three weeks, the content strategy will be developed. Afterwards, the visual identity will be created."
        paddingTopBottom="SpacingSpacing4"
      />
      <WorkDetails />
    </Container>
  );
};

export default WorkPage;
