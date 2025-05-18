"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { useBookmarks } from "@/context/BookmarkContext";
import ContentCard from "./ContentCard";
import ContentContainer from "./ContentContainer";

const Recommended = () => {
  const { items, toggleBookmark } = useBookmarks();

  // Filter recommended items (not trending)
  const recommended = items.filter((item) => !item.isTrending);

  return (
    <Box>
      <Typography variant="h1">Recommended for you</Typography>
      <ContentContainer>
        {recommended.map((item) => (
          <ContentCard
            key={item.title}
            title={item.title}
            thumbnail={item.thumbnail}
            year={item.year}
            category={item.category}
            rating={item.rating}
            isBookmarked={item.isBookmarked}
            isTrending={item.isTrending}
            onBookmarkToggle={() => toggleBookmark(item.title)}
          />
        ))}
      </ContentContainer>
    </Box>
  );
};

export default Recommended;
