"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContentText from "./ContentText";

interface Props {
  title: string;
  thumbnail: {
    trending?: { small: string; large: string };
    regular: { small: string; medium: string; large: string };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  useIsTrending?: boolean;
  onBookmarkToggle?: () => void;
}

const ContentCard = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  isTrending,
  useIsTrending,
  onBookmarkToggle,
}: Props) => {
  return (
    <Box sx={{ margin: "1rem" }}>
      <Box
        sx={{
          backgroundImage: `url('${thumbnail.regular.large}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
          height: "18vh",
          width: "18vw",
          margin: "2rem 0",
          display: "flex",
          flexDirection: isTrending ? "column" : "row",
          justifyContent: isTrending ? "space-between" : "flex-end",
          padding: "1rem",
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(15, 21, 30, 0.25)",
            padding: "0.5rem",
            borderRadius: "1.5rem",
            height: "1rem",
            width: "1rem",
            alignSelf: isTrending ? "flex-end" : "flex-start",
            cursor: "pointer",
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 10,
          }}
          onClick={onBookmarkToggle}
          role="button"
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <Image
            src={
              isBookmarked
                ? "/assets/icon-bookmark-full.svg"
                : "/assets/icon-bookmark-empty.svg"
            }
            alt="bookmark-icon"
            height={16}
            width={16}
          />
        </Box>

        {useIsTrending && (
          <ContentText
            year={year}
            title={title}
            rating={rating}
            category={category}
          />
        )}
      </Box>

      {!useIsTrending && (
        <ContentText
          year={year}
          title={title}
          rating={rating}
          category={category}
        />
      )}
    </Box>
  );
};

export default ContentCard;
