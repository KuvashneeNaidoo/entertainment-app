"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { useBookmarks } from "@/context/BookmarkContext";
import ContentContainer from "./ContentContainer";
import ContentCard from "./ContentCard";

const Trending = () => {
  const { items, toggleBookmark } = useBookmarks();

  // Filter trending items from context-managed items state
  const trending = items.filter((item) => item.isTrending === true);

  return (
    <Box>
      <Typography variant="h1">Trending</Typography>
      <ContentContainer>
        {trending.map((item) => (
          <ContentCard
            key={item.title}
            {...item}
            useIsTrending={true}
            onBookmarkToggle={() => toggleBookmark(item.title)}
          />
        ))}
      </ContentContainer>
    </Box>
  );
};

export default Trending;
