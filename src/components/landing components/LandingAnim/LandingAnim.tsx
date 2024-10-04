import React from "react";
import styled from "styled-components";
import Heading from "../../base components/TypographyComponents/Heading/Heading";

// Styled component for the container with the background image
const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; // Full height of the viewport
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://www.booooooom.com/wp-content/uploads/2015/02/nicolasfong3.gif"); // Replace with your image path
    background-size: cover;
    background-position: center;
    filter: brightness(0.8); // Slight darkening for contrast
    mix-blend-mode: color-dodge; // Blend mode for lighter effect
    z-index: 10;
  }
`;

// Styled component for the heading text
const CenteredHeading = styled(Heading)`
  position: relative;
  z-index: -10; // Above the background image

  text-align: center;
  font-size: 3rem; // Adjust font size
  mix-blend-mode: normal; // Ensure the heading text doesn't blend
`;

// The LandingAnim component
const LandingAnim: React.FC = () => {
  return (
    <LandingContainer>
      <CenteredHeading level="display" color="light">
        Masha
      </CenteredHeading>
    </LandingContainer>
  );
};

export default LandingAnim;
