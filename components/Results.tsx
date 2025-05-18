"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import ContentContainer from "./ContentContainer";
import ContentCard from "./ContentCard";
import data from "@/data/data.json";
import { usePathname } from "next/navigation";

interface Props {
  filter: string;
}

const Results = ({ filter }: Props) => {
  const pathName = usePathname();

  const filterByPath = () => {
    switch (pathName) {
      case "/movies":
        return data.filter((item) => item.category === "Movie");
      case "/tv":
        return data.filter((item) => item.category === "TV Series");
      case "/bookmarks":
        return data.filter((item) => item.isBookmarked === true);
      default:
        return data;
    }
  };

  const results = filterByPath().filter((item) =>
    item.title.toLowerCase().includes(filter)
  );
  return (
    <Box>
      <Typography variant="h1">
        {`Found ${results.length} ${
          results.length > 1 ? "results" : "result"
        } for "${filter}"`}
      </Typography>
      <ContentContainer>
        {results.map((item) => {
          return <ContentCard {...item} key={item.title} />;
        })}
      </ContentContainer>
    </Box>
  );
};

export default Results;
