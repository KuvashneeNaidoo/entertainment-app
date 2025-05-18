"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import ContentContainer from "@/components/ContentContainer";
import ContentCard from "@/components/ContentCard";
import PageContainer from "@/components/PageContainer";
import { useBookmarks } from "@/context/BookmarkContext";

const Movies = () => {
  const { items, toggleBookmark } = useBookmarks();
  const movies = items.filter((item) => item.category === "Movie");

  return (
    <PageContainer>
      <Typography variant="h1">Movies</Typography>
      <ContentContainer>
        {movies.map((movie) => (
          <ContentCard
            {...movie}
            key={movie.title}
            onBookmarkToggle={() => toggleBookmark(movie.title)}
          />
        ))}
      </ContentContainer>
    </PageContainer>
  );
};

export default Movies;
