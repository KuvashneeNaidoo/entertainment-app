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

      <Typography variant="h1">Bookmarked TV Series</Typography>
      <ContentContainer>
        {bookmarkedShows.map((show) => (
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

export default Bookmarks;
