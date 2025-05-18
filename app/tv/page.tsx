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
            key={show.title}
            title={show.title}
            thumbnail={show.thumbnail}
            year={show.year}
            category={show.category}
            rating={show.rating}
            isBookmarked={show.isBookmarked}
            isTrending={show.isTrending}
            onBookmarkToggle={() => toggleBookmark(show.title)}
          />
        ))}
      </ContentContainer>
    </PageContainer>
  );
};

export default TV;
