import React, { useEffect, useState } from "react";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import Link from "../../base components/TypographyComponents/Link/Link";
import {
  fetchCategories,
  Category,
} from "../../../utils/fetchCategories/fetchCategories";
import Box from "../../base components/Primatives/Box/Box";
import Flex from "../../base components/LayoutComponents/Flex/Flex";

interface CategoryListProps {
  onSelectCategory: (category: string | null) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch categories.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const allCategory: Category = { name: "All" };
  const categoriesWithAll = [allCategory, ...categories];

  // For larger screens, group categories into pairs
  const categoryRows = [];
  for (let i = 0; i < categoriesWithAll.length; i += 2) {
    const categoryPair = categoriesWithAll.slice(i, i + 2);
    categoryRows.push(categoryPair);
  }

  return (
    <Stack direction="vertical" gap="SpacingSpacing2">
      {categoryRows.map((row, rowIndex) => (
        <Flex key={rowIndex} gap="SpacingSpacing2">
          {row.map((category) => (
            <Box
              key={category.name}
              paddingTop="SpacingSpacing1"
              paddingBottom="SpacingSpacing1"
              paddingRight="SpacingSpacing3"
              paddingLeft="SpacingSpacing3"
              borderRadius="8px"
              borderLeft
              borderRight
              borderTop
              borderBottom
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory(
                  category.name === "All" ? null : category.name
                );
              }}
              style={{ cursor: "pointer", display: "inline-block" }}
            >
              <Link href="#" color="dark" align="center">
                {category.name}
              </Link>
            </Box>
          ))}
        </Flex>
      ))}
    </Stack>
  );
};

export default CategoryList;
