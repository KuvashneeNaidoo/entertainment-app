"use client";
import Trending from "@/components/Trending";
import React from "react";
import Recommended from "@/components/Recommended";
import PageContainer from "@/components/PageContainer";
import { useAppSelector } from "@/utils/hooks";
import Results from "@/components/Results";

const Home = () => {
  const { filter } = useAppSelector((state) => state.filter);
  return (
    <PageContainer>
      <Trending />
      <Recommended />
    </PageContainer>
  );
};

export default Home;
