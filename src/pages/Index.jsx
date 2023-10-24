import React from "react";
import Header from "../components/Header/Header";
import ResultAdditionCard from "../components/Cards/ResultAdditionCard/ResultAdditionCard";
import ResultCard from "../components/Cards/ResultCard/ResultCard";
import ConfigCard from "../components/Cards/ConfigCard/ConfigCard";



export default function Index() {
  return (
    <>
      <Header />
      <ResultAdditionCard />
      <ResultCard />
      <ConfigCard />
      <div style={{ textAlign: 'center', width: "100%", marginBottom: "12px" }}>
        Uwaga strona nie jest jeszcze dopracowana, mogą pojawiać się błędy. Pozdrawiam.
      </div>
    </>
  );
}
