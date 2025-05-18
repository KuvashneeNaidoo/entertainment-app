"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import Box from "@mui/material/Box";
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import { Provider } from "react-redux";
import { store } from "@/store/store";

import { BookmarkProvider } from "@/context/BookmarkContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <BookmarkProvider>
                {" "}
                {/* <-- Wrap here */}
                <Box
                  sx={{
                    display: "flex",
                    margin: "1rem",
                    justifyContent: "space-between",
                  }}
                >
                  <Nav />
                  <Box>
                    <Search />
                    {children}
                  </Box>
                </Box>
              </BookmarkProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Provider>
  );
}
