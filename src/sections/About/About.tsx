import React from "react";
import Container from "../../components/base components/Container/Container";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import TextRevealByWord from "../../components/about components/TextRevealByWord/TextRevealByWord";

const About: React.FC = () => {
  return (
    <Container
      height="100vh"
      direction="column"
      backgroundColor="transparent"
      style={{
        backgroundImage: `url("person.svg")`,
        backgroundSize: "80vw 90vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-30vw 10vh",
      }}
    >
      <Flex xAlign="center" yAlign="center">
        <TextRevealByWord
          text="A Barcelona-based UI designer and frontend developer, driven by creating meaningful experiences that resonate to people"
          className="relative z-0 h-[100vh]"
        />
      </Flex>
    </Container>
  );
};

export default About;
