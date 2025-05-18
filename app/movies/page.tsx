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
            key={movie.title}
            title={movie.title}
            thumbnail={movie.thumbnail}
            year={movie.year}
            category={movie.category}
            rating={movie.rating}
            isBookmarked={movie.isBookmarked}
            isTrending={movie.isTrending}
            onBookmarkToggle={() => toggleBookmark(movie.title)}
          />
        ))}
      </ContentContainer>
    </PageContainer>
  );
};

export default Movies;
