"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import ContentContainer from "@/components/ContentContainer";
import ContentCard from "@/components/ContentCard";
import PageContainer from "@/components/PageContainer";
import { useBookmarks } from "@/context/BookmarkContext";

const Bookmarks = () => {
  const { items, toggleBookmark } = useBookmarks();
  const bookmarks = items.filter((item) => item.isBookmarked);
  const bookmarkedMovies = bookmarks.filter((b) => b.category === "Movie");
  const bookmarkedShows = bookmarks.filter((b) => b.category === "TV Series");

  return (
    <PageContainer>
      <Typography variant="h1">Bookmarked Movies</Typography>
      <ContentContainer>
        {bookmarkedMovies.map((movie) => (
          <ContentCard
            {...movie}
            key={movie.title}
            onBookmarkToggle={() => toggleBookmark(movie.title)}
          />
        ))}
      </ContentContainer>

      <Typography variant="h1">Bookmarked TV Series</Typography>
      <ContentContainer>
        {bookmarkedShows.map((show) => (
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

export default Bookmarks;
