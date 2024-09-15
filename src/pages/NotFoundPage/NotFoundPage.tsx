import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Stack from "../../components/base components/LayoutComponents/Stack/Stack";
import {
  BodyFontFamily,
  BodyFontSize,
  BodyFontWeight,
  BodyLetterSpacing,
} from "../../tokens/js/variables";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: url("/noise.jpeg") center/cover no-repeat; /* Use noise.jpeg as background */
  position: relative; /* Make the container relative for absolute positioning of the heading */
`;

const EyeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EyeImage = styled.img`
  width: 40vw; /* Adjust size as needed */
  height: auto;
  z-index: 1; /* Ensure it's behind the heading */
  mix-blend-mode: exclusion; /* Adjust blend mode as desired */
`;

const Button = styled.button`
  padding: 0.6rem 1.5rem;
  font-size: ${BodyFontSize}; /* Apply the specified font size */
  font-family: ${BodyFontFamily}; /* Apply the specified font family */
  font-weight: ${BodyFontWeight}; /* Apply the specified font weight */
  letter-spacing: ${BodyLetterSpacing}; /* Apply the specified letter spacing */
  text-transform: uppercase;
  margin: 0; /* Ensure no margin is applied */
  cursor: pointer;
  background-color: #242424;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #1c1c1c;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Stack direction="vertical" gap="SpacingSpacing1">
        <EyeContainer>
          <EyeImage src="/eye.png" alt="Eye" />
        </EyeContainer>
        <Button onClick={handleGoHome}>Home</Button>
      </Stack>
    </Container>
  );
};

export default NotFoundPage;
