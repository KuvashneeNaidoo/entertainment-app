import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  year: number;
  title: string;
  category: string;
  rating: string;
}

const ContentText = ({ year, title, category, rating }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "55%",
        }}
      >
        <Typography
          sx={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.5)" }}
        >
          {year}
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            height: "0.25rem",
            width: "0.25rem",
            borderRadius: "1rem",
          }}
        />
        <Typography
          sx={{
            fontSize: "0.8125rem",
            color: "rgba(255, 255, 255, 0.5)",
            alignItems: "center",
          }}
        >
          <Image
            src={
              category === "Movie"
                ? "/assets/icon-category-movie.svg"
                : "/assets/icon-category-tv.svg"
            }
            alt="icon"
            height={16}
            width={16}
            style={{ marginRight: "0.5rem" }}
          ></Image>
          {category}
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            height: "0.25rem",
            width: "0.25rem",
            borderRadius: "1rem",
          }}
        />
        <Typography
          sx={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.5)" }}
        >
          {rating}
        </Typography>
      </Box>
      <Typography
        sx={{ color: "#FFFFFF", fontSize: "1.125rem", fontWeight: 600 }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ContentText;
