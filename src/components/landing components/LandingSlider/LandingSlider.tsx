import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 10;
`;

const Slide = styled(motion.div)<{ size: { width: string; height: string } }>`
  position: absolute;
  background-size: cover;
  background-position: center;
  mix-blend-mode: multiply; /* Apply blend mode */
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
`;

const LandingSlider: React.FC = () => {
  const images = [
    "https://i.pinimg.com/originals/44/04/20/4404205a930010b2d073543ebd9565c8.gif",
    "https://i.pinimg.com/originals/57/26/e8/5726e8700bf60b88f553f162e21ed96a.gif",
    "https://i.pinimg.com/originals/21/d7/88/21d788c557f51f186012195bc854bb4c.gif",
    "https://i.pinimg.com/originals/b2/55/96/b2559659bddb30934adadfb0b8ac24b8.gif",
    "https://i.pinimg.com/originals/de/e1/94/dee194956c8842fe9217cbfb11083584.gif",
  ];

  const directions = [
    { x: "-100vw", y: "0vh" }, // From the left
    { x: "100vw", y: "0vh" }, // From the right
    { x: "0vw", y: "-100vh" }, // From the top
    { x: "0vw", y: "100vh" }, // From the bottom
    { x: "100vw", y: "100vh" }, // From the bottom-right
  ];

  const targetPositions = [
    { x: "3vw", y: "20vh" }, // Top-left
    { x: "25vw", y: "10vh" }, // Top-right
    { x: "20vw", y: "50vh" }, // Bottom-left
    { x: "60vw", y: "50vh" }, // Bottom-right
    { x: "55vw", y: "5vh" }, // Center
  ];

  const sizes = [
    { width: "30vw", height: "40vh" },
    { width: "30vw", height: "40vh" },
    { width: "35vw", height: "40vh" },
    { width: "30vw", height: "40vh" },
    { width: "30vw", height: "60vh" },
  ];

  const variants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: directions[index].x,
      y: directions[index].y,
      rotate: 0,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: targetPositions[index].x,
      y: targetPositions[index].y,
      rotate: index * 5, // Add a slight rotation for each image
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide
          key={index}
          initial="hidden"
          animate="visible"
          custom={index}
          variants={variants}
          size={sizes[index]}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </SliderContainer>
  );
};

export default LandingSlider;
