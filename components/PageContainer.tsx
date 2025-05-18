"use client";
import React from "react";
import Box from "@mui/material/Box";
import { useAppSelector } from "@/utils/hooks";
import Results from "./Results";

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  const { filter } = useAppSelector((state) => state.filter);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        margin: "1rem",
      }}
    >
      {filter === "" ? (
        <>{children}</>
      ) : (
        <>
          <Results filter={filter} />
        </>
      )}
    </Box>
  );
};

export default PageContainer;
