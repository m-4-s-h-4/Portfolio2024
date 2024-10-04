// src/components/Category/Category.tsx

import React from "react";
import styled from "styled-components";
import Box from "../../base components/Primatives/Box/Box";
import Paragraph from "../../base components/TypographyComponents/Paragraph/Paragraph";
import { SpacingSpacing1 } from "../../../tokens/js/variables";

// Styled component for the category badge
const CategoryWrapper = styled(Box)`
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-top: ${SpacingSpacing1};
`;

type CategoryProps = {
  name: string;
};

const Category: React.FC<CategoryProps> = ({ name }) => {
  return (
    <CategoryWrapper
      borderBottom
      borderLeft
      borderRight
      borderTop
      borderRadius="5px"
    >
      <Paragraph>{name}</Paragraph>
    </CategoryWrapper>
  );
};

export default Category;
