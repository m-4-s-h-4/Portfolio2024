import React, { useState } from "react";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import Box from "../../base components/Primatives/Box/Box";
import Paragraph from "../../base components/TypographyComponents/Paragraph/Paragraph";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import HyperText from "./HyperText";

const Service: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredBox(index);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <Grid variant="Equal3" gap="SpacingSpacing0">
      {[
        {
          title: "Digital Design",
          description:
            "Design engaging UI and eye-catching social media posts that captivate your audience and enhance your brand's presence.",
          hoverImage:
            'url("https://i.pinimg.com/originals/21/d7/88/21d788c557f51f186012195bc854bb4c.gif")',
        },
        {
          title: "Motion Graphics",
          description:
            "Create eye-catching animations that bring your ideas to life. Perfect for videos, social media, and more.",
          hoverImage:
            'url("https://i.pinimg.com/originals/57/26/e8/5726e8700bf60b88f553f162e21ed96a.gif")',
        },
        {
          title: "Web Development",
          description:
            "Build powerful websites that make your brand stand out and perfectly match your unique identity.",
          hoverImage:
            'url("https://i.pinimg.com/originals/b2/55/96/b2559659bddb30934adadfb0b8ac24b8.gif")',
        },
      ].map((service, index) => (
        <Box
          key={index}
          borderBottom
          borderRight={index < 2}
          borderTop
          paddingTop="SpacingSpacing6"
          paddingBottom="SpacingSpacing6"
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            overflow: "hidden",
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background image overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: service.hoverImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 0.6s ease-in-out", // Smoother transition
              opacity: hoveredBox === index ? 1 : 0, // Fade in/out
              zIndex: 0, // Behind the content
            }}
          />
          {hoveredBox !== index && (
            <Stack direction="vertical">
              <HyperText
                text={service.title}
                duration={800}
                level="h4"
                align="center"
                className="centered-heading"
              />
              <Paragraph align="center">{service.description}</Paragraph>
            </Stack>
          )}
        </Box>
      ))}
    </Grid>
  );
};

export default Service;
