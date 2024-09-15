import React, { useEffect, useState } from "react";
import Container from "../../base components/Container/Container";
import Heading from "../../base components/TypographyComponents/Heading/Heading";

// Define the Landing component
const AnimLanding: React.FC = () => {
  // State to track the transparency of each cell (true = transparent, false = filled)
  const [cellStates, setCellStates] = useState<boolean[]>(
    Array(18).fill(false)
  );

  // State to track if the initial animation is active
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  // List of background images to cycle through
  const backgroundImages: string[] = [
    "https://i.pinimg.com/originals/44/04/20/4404205a930010b2d073543ebd9565c8.gif",
    "https://i.pinimg.com/originals/57/26/e8/5726e8700bf60b88f553f162e21ed96a.gif",
    "https://i.pinimg.com/originals/21/d7/88/21d788c557f51f186012195bc854bb4c.gif",
    "https://i.pinimg.com/originals/b2/55/96/b2559659bddb30934adadfb0b8ac24b8.gif",
    "https://i.pinimg.com/originals/de/e1/94/dee194956c8842fe9217cbfb11083584.gif",
  ];

  // State to track the current background image index
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0);

  useEffect(() => {
    // Initial Animation: Rapidly toggle random cells for 3 seconds
    const animationInterval = setInterval(() => {
      // Select a random cell index between 0 and 17
      const randomIndex = Math.floor(Math.random() * 18);
      setCellStates((prev) =>
        prev.map((state, index) => (index === randomIndex ? !state : state))
      );
    }, 100); // Toggle every 100ms

    // After 3 seconds, stop the initial animation and start the group-based transparency
    const animationTimeout = setTimeout(() => {
      clearInterval(animationInterval); // Stop the rapid toggling
      setIsAnimating(false); // Mark the animation as complete
    }, 3000); // 3 seconds for the initial animation

    // Cleanup function to clear intervals and timeouts if the component unmounts
    return () => {
      clearInterval(animationInterval);
      clearTimeout(animationTimeout);
    };
  }, []);

  useEffect(() => {
    let backgroundInterval: NodeJS.Timeout;

    // Function to randomly toggle cell states
    const toggleRandomCells = () => {
      const newCellStates = Array(18)
        .fill(false)
        .map(() => Math.random() > 0.5);
      setCellStates(newCellStates);
    };

    // Start cycling background images only after initial animation completes
    if (!isAnimating) {
      backgroundInterval = setInterval(() => {
        toggleRandomCells(); // Randomly toggle cells
        setBackgroundIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
      }, 3000); // 3 seconds
    }

    // Cleanup the interval when component unmounts or if isAnimating changes
    return () => {
      if (backgroundInterval) {
        clearInterval(backgroundInterval);
      }
    };
  }, [isAnimating, backgroundImages.length]);

  return (
    <Container
      height="100vh"
      style={{
        ...containerStyle,
        backgroundImage: `url('${backgroundImages[backgroundIndex]}')`,
      }}
    >
      {/* Grid Container */}
      <div style={gridStyle}>
        {Array.from({ length: 18 }, (_, index) => (
          <div
            key={index}
            style={{
              ...gridCellStyle,
              backgroundColor: cellStates[index] ? "transparent" : "#F2F0F0", // Slight transparency for better effect
            }}
          ></div>
        ))}
      </div>

      {/* Heading */}
      <Heading level="display" color="light" style={headingStyle}>
        Masha
      </Heading>
    </Container>
  );
};

// Styles for the container without backgroundImage (set dynamically)
const containerStyle: React.CSSProperties = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative", // To position child elements absolutely
  overflow: "hidden",
};

// Styles for the grid container
const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  width: "100%",
  height: "100%",
  position: "absolute", // Overlay the grid on the background image
  top: 0,
  left: 0,
  zIndex: 2, // Ensure grid is above the background but below the heading
};

// Styles for each grid cell
const gridCellStyle: React.CSSProperties = {
  border: "0.5px solid rgba(0, 0, 0, 0.1)", // Light border for better aesthetics
  backgroundColor: "#F2F0F0", // Slight transparency
  transition: "background-color 0.2s ease", // Smooth transition for background color
};

// Styles for the heading
const headingStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  mixBlendMode: "difference",
  zIndex: 3, // Ensure heading is above the grid
  whiteSpace: "nowrap",
};

export default AnimLanding;
