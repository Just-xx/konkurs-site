import Title from "../../Title/Title";
import Button from "../../Button/Button";
import { useContext } from "react";
import ThemeSettings from "./ThemeSettings/ThemeSettings";
import { TableCreatorContainer } from "../Creator.styles";
import Banner from "./Banner/Banner";
import { ThemeCreatorContext } from "../../../contexts/ThemeCreatorContext";

export default function TableCreator() {
  
  const themeCreator = useContext(ThemeCreatorContext);

  return (
    <>
      <TableCreatorContainer>
        <Title center>Stwórz motyw twojej nowej tabeli</Title>
        <Banner />
        <ThemeSettings />
        <Button
          noIcon
          onClick={() => themeCreator.saveToIDB()}
        >
          Dodaj tabelę
        </Button>
      </TableCreatorContainer>
    </>
  );
}
