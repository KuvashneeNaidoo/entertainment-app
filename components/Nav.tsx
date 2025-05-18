import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161D2F",
        width: "3vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "1rem",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "30vh",
          justifyContent: "space-between",
        }}
      >
        <Image src="/assets/logo.svg" alt="logo" height={20} width={20} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "20vh",
          }}
        >
          <Link href="/">
            <Image
              src="/assets/icon-nav-home.svg"
              alt="logo"
              height={16}
              width={16}
            />
          </Link>
          <Link href="/movies">
            <Image
              src="/assets/icon-nav-movies.svg"
              alt="logo"
              height={16}
              width={16}
            />
          </Link>
          <Link href="/tv">
            <Image
              src="/assets/icon-nav-tv-series.svg"
              alt="logo"
              height={16}
              width={16}
            />
          </Link>
          <Link href="/bookmarks">
            <Image
              src="/assets/icon-nav-bookmark.svg"
              alt="logo"
              height={16}
              width={16}
            />
          </Link>
        </Box>
      </Box>
      <Image
        src="/assets/image-avatar.png"
        alt="logo"
        height={24}
        width={24}
        style={{ border: "1px solid white", borderRadius: "1rem" }}
      />
    </Box>
  );
};

export default Nav;
