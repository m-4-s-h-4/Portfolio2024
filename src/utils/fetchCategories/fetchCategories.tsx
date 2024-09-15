import { gql } from "graphql-request";
import { client } from "../lib/client";

export type Category = {
  name: string;
};

type CategoriesQueryResult = {
  categories: Category[];
};

const CategoriesQuery = gql`
  query Categories {
    categories {
      name
    }
  }
`;

export async function fetchCategories() {
  try {
    const { categories }: CategoriesQueryResult =
      await client.request(CategoriesQuery);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
