import React from "react";
import Grid from "../../../../base components/LayoutComponents/Grid/Grid";
import Paragraph from "../../../../base components/TypographyComponents/Paragraph/Paragraph";

interface TwoParagraphsProps {
  text1?: string;
  text2?: string;
}

const TwoParagraphs: React.FC<TwoParagraphsProps> = ({
  text1 = "Default text for paragraph 1.",
  text2 = "Default text for paragraph 2.",
}) => {
  return (
    <Grid variant="Equal2">
      <Paragraph>{text1}</Paragraph>
      <Paragraph>{text2}</Paragraph>
    </Grid>
  );
};

export default TwoParagraphs;
