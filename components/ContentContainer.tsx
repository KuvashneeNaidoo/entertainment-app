import React from "react";
import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  );
};

export default ContentContainer;
