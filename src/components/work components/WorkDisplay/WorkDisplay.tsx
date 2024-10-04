import React, { useEffect, useState } from "react";
import { Work, fetchWork } from "../../../utils/fetchWork/fetchWork";
import Container from "../../base components/Container/Container";
import StackingCards from "../StackingCards/StackingCards";

const WorkDisplay: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWorks = async () => {
      try {
        const fetchedWorks = await fetchWork();
        setWorks(fetchedWorks);
      } catch (error) {
        setError("Failed to fetch works");
      } finally {
        setLoading(false);
      }
    };

    loadWorks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container height="auto">
      <StackingCards works={works} />
    </Container>
  );
};

export default WorkDisplay;
