import React from "react";
import PresentationTable from "../components/PresentationTable/PresentationTable";
import HeroLogo from "../components/Logos/HeroLogo/HeroLogo";
import '../Presentation.css'
import Author from "../components/Author/Author";

export default function Presentation() {
  
  return (
    <>
      <HeroLogo />
      <PresentationTable />
      <Author />
    </>
  );
}
