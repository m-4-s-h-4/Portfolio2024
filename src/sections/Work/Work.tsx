import React from "react";
import Container from "../../components/base components/Container/Container";

import WorkDisplay from "../../components/work components/WorkDisplay/WorkDisplay";

const Work: React.FC = () => {
  return (
    <>
      <Container height="100vh">
        <WorkDisplay />
      </Container>
    </>
  );
};

export default Work;
