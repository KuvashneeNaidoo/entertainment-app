"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import ContentContainer from "@/components/ContentContainer";
import ContentCard from "@/components/ContentCard";
import PageContainer from "@/components/PageContainer";
import { useBookmarks } from "@/context/BookmarkContext";

const TV = () => {
  const { items, toggleBookmark } = useBookmarks();
  const shows = items.filter((item) => item.category === "TV Series");

  return (
    <PageContainer>
      <Typography variant="h1">TV Series</Typography>
      <ContentContainer>
        {shows.map((show) => (
          <ContentCard
            {...show}
            key={show.title}
            onBookmarkToggle={() => toggleBookmark(show.title)}
          />
        ))}
      </ContentContainer>
    </PageContainer>
  );
};

export default TV;
