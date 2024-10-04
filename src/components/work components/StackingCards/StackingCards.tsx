import React, { useEffect, useRef } from "react";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import {
  FullHeightStackItem1,
  FullHeightStackItem,
  StackList,
  StackItem,
} from "./StackItemContent";
import StackItemContent from "./StackItemContent";

interface Work {
  id: string;
  title: string;
  description: string;
  category: { name: string };
  thumbnail: { url: string };
}

interface StackingCardsProps {
  works: Work[];
}

const StackingCards: React.FC<StackingCardsProps> = ({ works }) => {
  const containerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index") || "0");
        const element = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          window.requestAnimationFrame(() => {
            const offset = index * 20;
            const scale = 1 - index * 0.05;
            element.style.setProperty("--offset", `${offset}px`);
            element.style.setProperty("--scale", `${scale}`);
          });
        } else {
          window.requestAnimationFrame(() => {
            element.style.setProperty("--offset", "0px");
            element.style.setProperty("--scale", "1");
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
    });

    const items = container.querySelectorAll(".js-stack-cards__item");
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [works]);

  return (
    <StackList ref={containerRef} className="stack-cards js-stack-cards">
      {/* Full-height StackItem at the top */}
      <FullHeightStackItem1>
        <Heading level="display" align="center">
          Work
        </Heading>
      </FullHeightStackItem1>

      {/* Dynamic Work Items */}
      {works.map((work, index) => (
        <StackItem
          className="stack-cards__item js-stack-cards__item"
          key={work.id}
          data-index={index}
        >
          <StackItemContent work={work} />
        </StackItem>
      ))}

      {/* Full-height StackItem at the bottom */}
      <FullHeightStackItem>
        <Heading level="h1" align="center" color="light">
          GET IN TOUCH
        </Heading>
      </FullHeightStackItem>
    </StackList>
  );
};

export default StackingCards;
