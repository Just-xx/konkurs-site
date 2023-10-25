import React from "react";
import Header from "../components/Header/Header";
import ResultAdditionCard from "../components/Cards/ResultAdditionCard/ResultAdditionCard";
import ResultCard from "../components/Cards/ResultCard/ResultCard";
import ConfigCard from "../components/Cards/ConfigCard/ConfigCard";
import Author from "../components/Author/Author";

export default function Index() {
  return (
    <>
      <Header />
      <ResultAdditionCard />
      <ResultCard />
      <ConfigCard />
      <Author />
    </>
  );
}
