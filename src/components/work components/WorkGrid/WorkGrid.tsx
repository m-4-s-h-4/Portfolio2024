import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../base components/Container/Container";
import { fetchWork, Work } from "../../../utils/fetchWork/fetchWork";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import WorkDisplay from "../WorkDisplay/WorkDisplay";
import Box from "../../base components/Primatives/Box/Box";
import WorkNavigation from "../WorkNavigation/WorkNavigation";

const WorkGrid: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [filteredWorks, setFilteredWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadWorks = async () => {
      try {
        const worksData = await fetchWork();
        setWorks(worksData);
        setFilteredWorks(worksData);
      } catch (error) {
        setError("Failed to fetch works");
        console.error("Error fetching works:", error);
      } finally {
        setLoading(false);
      }
    };

    loadWorks();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredWorks(
        works.filter((work) => work.category.name === selectedCategory)
      );
    } else {
      setFilteredWorks(works);
    }
  }, [selectedCategory, works]);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (id: string) => {
    navigate(`/work/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container height="100vh">
      <Grid variant="WorkDisplay" gap="SpacingSpacing0">
        <WorkNavigation onSelectCategory={handleCategorySelect} />

        <Box height="100%">
          <WorkDisplay
            filteredWorks={filteredWorks}
            onProjectClick={handleProjectClick}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default WorkGrid;
