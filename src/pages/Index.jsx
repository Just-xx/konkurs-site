import React from "react";
import Header from "../components/Header/Header";
import ResultAdditionCard from "../components/Cards/ResultAdditionCard/ResultAdditionCard";
import ResultCard from "../components/Cards/ResultCard/ResultCard";
import ConfigCard from "../components/Cards/ConfigCard/ConfigCard";
import Author from "../components/Author/Author";
import TableLayoutCard from "../components/Cards/TableLayoutCard/TableLayoutCard";
import { useTableLayout } from "../hooks/useTableLayout";
import { TLContext } from "../contexts/TLContext";

export default function Index() {

  const tlHandler = useTableLayout();

  return (
    <>
      <TLContext.Provider value={tlHandler}>
        <Header />
        <TableLayoutCard />
        <ResultAdditionCard />
        {/* <ResultCard /> */}
        {/* <ConfigCard /> */}
        <Author />
      </TLContext.Provider>
    </>
  );
}
