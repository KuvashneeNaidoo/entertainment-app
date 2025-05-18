"use client";
import { setFilter } from "@/store/filterSlice";
import { useAppDispatch } from "@/utils/hooks";
import { Box, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

const Search = () => {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90vw",
        margin: "1rem",
        marginTop: 0,
      }}
    >
      <Image
        src="/assets/icon-search.svg"
        alt="search-icon"
        height={20}
        width={20}
      />
      <TextField
        placeholder="Search for movies or TV series"
        sx={{ width: "85vw" }}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </Box>
  );
};

export default Search;
