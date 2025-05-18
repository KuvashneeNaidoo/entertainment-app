"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface Item {
  title: string;
  category: string;
  isBookmarked: boolean;
  [key: string]: any;
}

interface BookmarkContextType {
  items: Item[];
  toggleBookmark: (title: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const BookmarkProvider = ({ children }: Props) => {
  const [items, setItems] = useState<Item[]>([]);

  // Load data and bookmarks from localStorage or data.json
  useEffect(() => {
    const stored = localStorage.getItem("bookmarkedItems");
    if (stored) {
      setItems(JSON.parse(stored));
    } else {
      // If none stored, load default data
      import("../data/data.json").then((module) => {
        setItems(module.default);
      });
    }
  }, []);

  // Save bookmarks to localStorage whenever items change
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("bookmarkedItems", JSON.stringify(items));
    }
  }, [items]);

  const toggleBookmark = (title: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.title === title
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item
      )
    );
  };

  return (
    <BookmarkContext.Provider value={{ items, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
